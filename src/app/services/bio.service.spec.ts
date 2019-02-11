import { TestBed } from '@angular/core/testing';

import { BioService } from './bio.service';

describe('BioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BioService = TestBed.get(BioService);
    expect(service).toBeTruthy();
  });
});
