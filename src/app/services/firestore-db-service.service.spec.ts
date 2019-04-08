import { TestBed } from '@angular/core/testing';

import { FirestoreDbServiceService } from './firestore-db-service.service';

describe('FirestoreDbServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreDbServiceService = TestBed.get(FirestoreDbServiceService);
    expect(service).toBeTruthy();
  });
});
