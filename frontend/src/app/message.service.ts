import { Injectable } from '@angular/core';

import { toast } from 'angular2-materialize';

@Injectable()
export class MessageService {

  constructor() { }
  
  log(message: string) {
    toast(message, 3000);
  }

  error(message: string) {
    toast(message, 3000, 'red');
  }

}
