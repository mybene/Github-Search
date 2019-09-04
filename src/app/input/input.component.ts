import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { User } from '../user';
import { Repository } from '../repository-class/repository';
import { AccountRequestService } from '../account-http/account-request.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input: string;
  users:User;
  reposit:Repository [];


  constructor( private accountRequestService: AccountRequestService) { }

  ngOnInit() {
  }
  search() {
this.accountRequestService.userRequest(this.input)
this.users=this.accountRequestService.users
console.log(typeof(this.users))

this.accountRequestService.repositRequest(this.input)
this.reposit=this.accountRequestService.reposit
console.log(this.reposit)
  }
}
