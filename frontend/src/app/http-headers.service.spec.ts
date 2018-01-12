import { TestBed, inject } from '@angular/core/testing';

import { HttpHeadersService } from './http-headers.service';

describe('HttpHeadersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHeadersService]
    });
  });

  it('should be created', inject([HttpHeadersService], (service: HttpHeadersService) => {
    expect(service).toBeTruthy();
  }));
});
