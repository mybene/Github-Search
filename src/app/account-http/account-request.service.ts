import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../user';
import { resolve } from 'url';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class AccountRequestService {
  user: User;
  repos: Repository[];

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "", new Date(), 0,0,0);
    this.repos = [];
  }
  userRequest(input) {
    interface ApiResponse {
      login: string,
      avatar_url: string,
      html_url: string,
      bio: string,
      created_at: Date,
      repositories: number,
      followers:number,
      followings:number
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/"+input+"?access_token="+environment.APIgithub).toPromise().then(response=>{
      
      this.user.login = response.login
        this.user.avatar_url = response.avatar_url
        this.user.bio = response.bio
        this.user.html_url = response.html_url
        this.user.created_at = response.created_at
        this.user.repositories = response.repositories
        this.user.followers=response.followers
        this.user.followings=response.followings
        console.log(this.user)
        resolve()
      },
        error => {
          this.user.login = " "
          this.user.avatar_url = " "
          this.user.bio = " "

          reject(error)
        })
    })
    return promise
  }
  repositRequest(input) {
    interface ApiResponse {
      repos_url:string
    }
    let promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>("https://api.github.com/users/"+input+"?access_token="+environment.APIgithub).toPromise().then(response=>{
      for (var i in response) {
          this.repos.push(this.user[i]);
        }
        resolve()
      },
        error => {
        

          reject(error)
        })
    })
    return promise


  }
}
