import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.username, this.password).subscribe();
  }

}
