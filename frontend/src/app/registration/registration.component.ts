import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: Object = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };


  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.register(this.user);
  }

}
