import { Component, OnInit } from '@angular/core';
// import { AccountService } from './acccount-service/account.service';
import { User } from '../user';
import { Repository } from '../repository';
import { AccountRequestService } from '../account-http/account-request.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input: string;
  users:User;
  repos:Repository [];


  constructor( private accountRequestService: AccountRequestService) { }

  ngOnInit() {
  }
  
  getInfos() {
this.accountRequestService.userRequest(this.input)
this.users=this.accountRequestService.user
console.log(this.users);

this.accountRequestService.repositRequest(this.input)
this.repos=this.accountRequestService.repos
console.log(this.input)
  }
}
