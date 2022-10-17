import { Router } from '@angular/router';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  showdata: any;
  title = 'dash-board';
  auth: boolean = true;
  constructor(private router: Router) {}

  ngDoCheck() {
    if (window.innerWidth < 576) {
      this.showdata = 'display:none !important';
    } else {
      this.showdata = 'display:block !important';
    }
    if (
      this.router.url === '/login' ||
      this.router.url === '/register' ||
      this.router.url === '/404' ||
      this.router.url === '/'
    ) {
      this.auth = false;
    } else {
      this.auth = true;
    }
  }
}
