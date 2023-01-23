import { TestBed } from '@angular/core/testing';

import { ApplicationGuardService } from './application-guard.service';

describe('ApplicationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationGuardService = TestBed.get(ApplicationGuardService);
    expect(service).toBeTruthy();
  });
});
