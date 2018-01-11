import { Injectable } from '@angular/core';

import { toast } from 'angular2-materialize';

@Injectable()
export class MessageService {

  constructor() { }
  
  add(message: string) {
    toast(message, 3000);
  }

}
