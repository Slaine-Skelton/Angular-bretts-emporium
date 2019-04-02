import { TestBed } from '@angular/core/testing';

import { GooglebooksApiService } from './googlebooks-api.service';

describe('GooglebooksApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglebooksApiService = TestBed.get(GooglebooksApiService);
    expect(service).toBeTruthy();
  });
});
