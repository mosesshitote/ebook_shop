import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EbookService, Ebook } from '../ebook.service';

@Component({
  selector: 'app-ebook-detail',
  templateUrl: './ebook-detail.component.html',
  styleUrls: ['./ebook-detail.component.css']
})
export class EbookDetailComponent implements OnInit {
  
  ebook: Ebook;

  constructor(
    private library: EbookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEbook();
  }

  getEbook() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.library.getEbook(id).subscribe(ebook => this.ebook = ebook);
  }

}
