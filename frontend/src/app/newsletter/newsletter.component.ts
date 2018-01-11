import { Component, OnInit } from '@angular/core';

import { NewsletterService } from './newsletter.service';
import { Subscriber } from './subscriber';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  subscriber: Subscriber = {
    email: ""
  };

  constructor (
		private newsletterService: NewsletterService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.newsletterService.addSubscriber(this.subscriber)
      .subscribe( _ => this.subscriber.email = "");
  }

}
