import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CatsEffects } from './cats.effects';

describe('CatsEffects', () => {
  let actions$: Observable<any>;
  let effects: CatsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CatsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
