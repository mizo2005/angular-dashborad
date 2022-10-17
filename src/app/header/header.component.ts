import { AuthService } from './../service/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  showbtn: any;
  margin: any;
  constructor(private data: AuthService) {}
  ngDoCheck() {
    if (window.innerWidth > 576) {
      this.showbtn = 'display:none !important';
    } else {
      this.showbtn = 'display:block !important';
    }
    if (window.innerWidth < 576) {
      this.margin = 'margin-right:0px !important';
    } else {
      this.margin = 'margin-right:200px !important';
    }
  }

  ngOnInit(): void {}
  logout() {
    this.data.logout();
  }
}
