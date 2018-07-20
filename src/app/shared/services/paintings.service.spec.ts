import { TestBed, inject } from '@angular/core/testing';

import { PaintingsService } from './paintings.service';

describe('PaintingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaintingsService]
    });
  });

  it('should be created', inject([PaintingsService], (service: PaintingsService) => {
    expect(service).toBeTruthy();
  }));
});
