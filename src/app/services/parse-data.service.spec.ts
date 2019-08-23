import { TestBed } from '@angular/core/testing';

import { ParseDataService } from './parse-data.service';

describe('ParseDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParseDataService = TestBed.get(ParseDataService);
    expect(service).toBeTruthy();
  });
});
