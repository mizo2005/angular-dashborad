import { AuthService } from './../../service/auth.service';
import { Component, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements DoCheck {
  hide: boolean = true;
  usernameerror: string = 'Username Is Required*';
  passworderror: string = 'Password Is Required*';
  emailerror: string = 'Email Is Reqruied*';
  usernameerrorstyle: string = '';
  passworderrorstyle: string = '';
  emailerrorstyle: string = '';
  disabled: boolean = true;
  constructor(private data: AuthService) {}
  ngDoCheck() {
    if (this.register.valid) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
    if (
      this.register.controls.name.dirty &&
      this.register.controls.name.touched
    ) {
      this.usernameerror = 'Username Must Be At Least 8 Current';
      this.usernameerrorstyle = 'red';
      if (this.register.controls.name.valid) {
        this.usernameerror = 'Username Is Valid';
        this.usernameerrorstyle = 'green';
      }
      if (this.register.controls.name.value === '') {
        this.usernameerror = 'Username Is Required';
        this.usernameerrorstyle = 'white';
      }
    }
    if (
      this.register.controls.password.dirty &&
      this.register.controls.password.touched
    ) {
      this.passworderror = 'Password Must Be At Least 8 Current';
      this.passworderrorstyle = 'red';
      if (this.register.controls.password.valid) {
        this.passworderror = 'Password Is Valid';
        this.passworderrorstyle = 'green';
      }
      if (this.register.controls.password.value === '') {
        this.passworderror = 'Password Is Required';
        this.passworderrorstyle = 'white';
      }
    }
    if (
      this.register.controls.email.dirty &&
      this.register.controls.email.touched
    ) {
      this.emailerror = 'Invalid Email Form';
      this.emailerrorstyle = 'red';
      if (this.register.controls.email.valid) {
        this.emailerror = 'Email Is Valid';
        this.emailerrorstyle = 'green';
      }
      if (this.register.controls.email.value === '') {
        this.emailerror = 'Email Is Required';
        this.emailerrorstyle = 'white';
      }
    }
  }

  register = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.log(this.register.controls.name.value);
    console.log(this.register.controls.password.value);

    this.data.usernames = this.register.controls.name.value;
    this.data.password = this.register.controls.password.value;
    this.data.register();
  }
}
