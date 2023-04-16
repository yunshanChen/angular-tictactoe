import { TestBed } from '@angular/core/testing';

import { BugcatService } from './bugcat.service';

describe('BugcatService', () => {
  let service: BugcatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugcatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
