import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
