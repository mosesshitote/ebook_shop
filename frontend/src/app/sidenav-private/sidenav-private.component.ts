import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sidenav-private',
  templateUrl: './sidenav-private.component.html',
  styleUrls: ['./sidenav-private.component.css']
})
export class SidenavPrivateComponent implements OnInit {

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().subscribe();
  }

}
