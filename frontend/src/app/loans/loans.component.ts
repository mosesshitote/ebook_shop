import { Component, OnInit } from '@angular/core';

import { EbookService, Loan } from '../ebook.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loans: Loan[];

  constructor(
    private library: EbookService
  ) { }

  ngOnInit() {
    this.library.listAllLoans().subscribe(loans => this.loans = loans);
  }

}
