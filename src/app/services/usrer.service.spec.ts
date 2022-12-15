import { TestBed } from '@angular/core/testing';

import { UsrerService } from './usrer.service';

describe('UsrerService', () => {
  let service: UsrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
