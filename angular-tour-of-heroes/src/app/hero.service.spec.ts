import { TestBed } from '@angular/core/testing';

import { HeroService } from './services/hero.service';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
