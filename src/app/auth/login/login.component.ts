import { AuthService } from './../../service/auth.service';
import { Component, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements DoCheck {
  hide: boolean = true;
  usernameerror: string = 'Username Is Required*';
  passworderror: string = 'Password Is Required*';
  usernameerrorstyle: string = '';
  passworderrorstyle: string = '';
  disabled: boolean = true;
  constructor(private mydata: AuthService) {}
  login = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  ngDoCheck() {
    if (this.login.valid) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
    if (
      this.login.controls.username.dirty &&
      this.login.controls.username.touched
    ) {
      this.usernameerror = 'Username Must Be At Least 8 Current';
      this.usernameerrorstyle = 'red';
      if (this.login.controls.username.valid) {
        this.usernameerror = 'Username Is Valid';
        this.usernameerrorstyle = 'green';
      }
      if (this.login.controls.username.value === '') {
        this.usernameerror = 'Username Is Required';
        this.usernameerrorstyle = 'white';
      }
    }
    if (
      this.login.controls.password.dirty &&
      this.login.controls.password.touched
    ) {
      this.passworderror = 'Password Must Be At Least 8 Current';
      this.passworderrorstyle = 'red';
      if (this.login.controls.password.valid) {
        this.passworderror = 'Password Is Valid';
        this.passworderrorstyle = 'green';
      }
      if (this.login.controls.password.value === '') {
        this.passworderror = 'Password Is Required';
        this.passworderrorstyle = 'white';
      }
    }
  }

  onSubmit() {
    this.mydata.logusername = this.login.controls.username.value;
    this.mydata.logpassword = this.login.controls.password.value;
    this.mydata.login();
  }
}
