import { TestBed } from '@angular/core/testing';

import { StudentqueansService } from './studentqueans.service';

describe('StudentqueansService', () => {
  let service: StudentqueansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentqueansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
