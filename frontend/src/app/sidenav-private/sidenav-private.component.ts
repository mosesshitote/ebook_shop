import { Component, OnInit } from '@angular/core';

import { AuthenticationService, User } from '../authentication.service';

@Component({
  selector: 'app-sidenav-private',
  templateUrl: './sidenav-private.component.html',
  styleUrls: ['./sidenav-private.component.css']
})
export class SidenavPrivateComponent implements OnInit {
  user: User;

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  logout() {
    this.auth.logout().subscribe();
  }

  getUser() {
    this.user = this.auth.getUser();
  }

}
