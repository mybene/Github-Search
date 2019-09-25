import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../user';
import { resolve } from 'url';
import { Repository } from '../repository';
import { Account } from '../account';

@Injectable({
  providedIn: 'root'
})
export class AccountRequestService {

  acc:Account;
  repos: Repository[];

  constructor(private http: HttpClient) {
    this.acc= new Account("","", "","","",new Date(),0,0,'');
    this.repos = [];
  }
  userRequest(input) {
    interface ApiResponse {
      name:string,
      login: string,
      avatar_url: string,
      html_url: string,
      bio: string,
      created_at: Date,
      followers:number,
      following:number
      repos_url:string
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/"+input+"?access_token="+environment.APIgithub).toPromise().then(response=>{
   
      this.acc.login = response.login
        this.acc.avatar_url = response.avatar_url
        this.acc.bio = response.bio
        this.acc.html_url = response.html_url
        this.acc.created_at = response.created_at
        this.acc.followers=response.followers
        this.acc.following=response.following
        this.acc.name=response.name
        this.acc.repos_url=response.repos_url
        console.log(this.acc)
        resolve()
      },
        error => {
          this.acc.login = " "
          this.acc.avatar_url = " "
          this.acc.bio = " "

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
          this.repos.push(this.repos[i]);
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
