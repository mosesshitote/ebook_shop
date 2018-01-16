import { Component, OnInit } from '@angular/core';

import { Ebook } from './ebook';
import { EbookService } from './ebook.service';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent implements OnInit {
  ebooks: Ebook[];

  constructor(
    private library: EbookService
  ) { }

  ngOnInit() {
    this.library.listAll().subscribe(ebooks => this.ebooks = ebooks);
  }

}
