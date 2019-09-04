import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repository } from '../repository-class/repository';
import { User } from '../user';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AccountRequestService {
  users: User;
  reposit: Repository[];

  constructor(private http: HttpClient) {
    this.users = new User("", "", "", "", new Date(), 0);
    this.reposit = [];
  }
  userRequest(input) {
    interface ApiResponse {
      login: string,
      avatar_url: string,
      html_url: string,
      bio: string,
      created_at: Date,
      repositories: number
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + input + "?access_token=" +environment.APIgithub).toPromise().then(response => {
        this.users.login = response.login
        this.users.avatar_url = response.avatar_url
        this.users.bio = response.bio
        this.users.html_url = response.html_url
        this.users.created_at = response.created_at
        this.users.repositories = response.repositories
        console.log(input)
        resolve()
      },
        error => {
          this.users.login = " "
          this.users.avatar_url = " "
          this.users.bio = " "

          reject(error)
        })
    })
    return promise
  }
  repositRequest(input) {
    interface ApiResponse {
      name: string,
      description: string,
      lastUpdated: Date
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + input + "?access_token=" +environment.APIgithub).toPromise().then(response => {
        for (var i in response) {
          this.reposit.push(response[i]);
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
