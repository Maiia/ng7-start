import { TestBed } from '@angular/core/testing';

import { Cats.GqService } from './cats.gq.service';

describe('Cats.GqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Cats.GqService = TestBed.get(Cats.GqService);
    expect(service).toBeTruthy();
  });
});
