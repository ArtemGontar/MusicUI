import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-reg',
  templateUrl: './auth-reg.component.html',
  styleUrls: ['./auth-reg.component.scss']
})
export class AuthRegComponent implements OnInit {
  // True - Auth, False - Reg
  isAuthOrReg: boolean;
  constructor() { }

  ngOnInit() {
    this.isAuthOrReg = true;
  }
}
