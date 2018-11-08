import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CatsOwnersEffects } from './cats-owners.effects';

describe('CatsOwnersEffects', () => {
  let actions$: Observable<any>;
  let effects: CatsOwnersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatsOwnersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CatsOwnersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
