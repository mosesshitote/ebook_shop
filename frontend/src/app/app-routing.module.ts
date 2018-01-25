import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { EbookDetailComponent } from './ebook-detail/ebook-detail.component';
import { LoansComponent } from './loans/loans.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';

const routes: Routes = [
  { path: '', component: EbooksComponent },
  { path: 'ebook/:id', component: EbookDetailComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'my-reviews', component: MyReviewsComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
