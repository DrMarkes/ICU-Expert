import { TestBed, inject } from '@angular/core/testing';

import { SepsisRecommendationsService } from './sepsis-recommendations.service';

describe('SepsisRecommendationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SepsisRecommendationsService]
    });
  });

  it('should be created', inject([SepsisRecommendationsService], (service: SepsisRecommendationsService) => {
    expect(service).toBeTruthy();
  }));
});
