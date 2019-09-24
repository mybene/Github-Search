import { Component, OnInit } from '@angular/core';
// import { AccountService } from './acccount-service/account.service';
import { User } from '../user';
import { Repository } from '../repository';
import { AccountRequestService } from '../account-http/account-request.service';
import { Account } from '../account';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input: string;
  // users:User;
  acc:Account;
  repos:Repository [];


  constructor( private accountRequestService: AccountRequestService) { }

  ngOnInit() {
  }
  
  getInfos() {
this.accountRequestService.userRequest(this.input)
this.acc=this.accountRequestService.acc
console.log(typeof(this.acc));

this.accountRequestService.repositRequest(this.input)
this.repos=this.accountRequestService.repos
console.log(this.input)
  }
}
