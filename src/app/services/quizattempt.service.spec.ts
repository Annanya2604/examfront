import { TestBed } from '@angular/core/testing';

import { QuizattemptService } from './quizattempt.service';

describe('QuizattemptService', () => {
  let service: QuizattemptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizattemptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
