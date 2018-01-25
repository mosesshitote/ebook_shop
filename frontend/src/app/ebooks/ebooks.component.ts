import { Component, OnInit } from '@angular/core';

import { EbookService, Ebook } from '../ebook.service';

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
    this.library.listAllEbooks().subscribe(ebooks => this.ebooks = ebooks);
  }

  public borrowEbook(ebookId: number) {
    this.library.borrowEbook(ebookId).subscribe();
  }

}
