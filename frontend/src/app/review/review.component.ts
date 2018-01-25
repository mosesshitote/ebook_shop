import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Review, ReviewService } from '../review.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews: Review[];
  
  constructor(
    private review: ReviewService,
    private route: ActivatedRoute,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.review.getEbookReviews(id).subscribe(reviews => this.reviews = reviews);
  }

  onSubmit(content: string) {
    const object_review = +this.route.snapshot.paramMap.get('id');
    this.review.addReview({ content, object_review } as Review).subscribe(newReview => this.reviews.push(newReview));
  }

}
