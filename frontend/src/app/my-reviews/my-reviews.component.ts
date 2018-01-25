import { Component, OnInit } from '@angular/core';

import { ReviewService, Review } from '../review.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.css']
})
export class MyReviewsComponent implements OnInit {

  reviews: Review[];

  constructor(
    private review: ReviewService,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    const id = this.auth.getUser().id;
    this.review.getUserReviews(id).subscribe(reviews => this.reviews = reviews);
  }

}
