import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usernames: any;
  password: any;
  logusername: any;
  logpassword: any;

  constructor(private route: Router) {}
  register() {
    if (localStorage.getItem(this.usernames)) {
      Swal.fire({
        icon: 'error',
        title: 'Username Is Already Registered!',
      });
    } else {
      console.log(this.usernames);
      console.log(this.password);
      localStorage.setItem(this.usernames, this.usernames);
      localStorage.setItem(this.password, this.password);
      this.route.navigate(['login']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You Register Successfuly',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  login() {
    if (
      (this.logusername = localStorage.getItem(this.logusername)) &&
      (this.logpassword = localStorage.getItem(this.logpassword))
    ) {
      this.route.navigate(['dash-board']);
      localStorage.setItem('true', '*****');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You Login Successfuly',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Unregster User Please Try Again',
        showConfirmButton: true,
      });
    }
  }
  logout() {
    Swal.fire({
      title: 'Are you sure You Want To Logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigate(['/login']);
        localStorage.removeItem('true');
      } else {
        this.route.navigate(['/dash-board']);
      }
    });
  }
}
