import { TestBed, inject } from '@angular/core/testing';

import { DiscosService } from './discos.service';

describe('DiscosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscosService]
    });
  });

  it('should be created', inject([DiscosService], (service: DiscosService) => {
    expect(service).toBeTruthy();
  }));
});
