import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private route: Router) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This Page Is Not Found!',
    });
    this.route.navigate(['/login']);
  }

  ngOnInit(): void {}
}
