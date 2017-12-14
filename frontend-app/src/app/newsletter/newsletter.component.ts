import { Component, OnInit } from '@angular/core';

import { NewsletterService } from './newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor (
		private newsletterService: NewsletterService
  ) { }

  ngOnInit() {
  }

}
