import { TestBed } from '@angular/core/testing';

import { AngularValidatorsService } from './angular-validators.service';

describe('AngularValidatorsService', () => {
  let service: AngularValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
