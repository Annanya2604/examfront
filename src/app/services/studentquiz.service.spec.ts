import { TestBed } from '@angular/core/testing';

import { StudentquizService } from './studentquiz.service';

describe('StudentquizService', () => {
  let service: StudentquizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentquizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
