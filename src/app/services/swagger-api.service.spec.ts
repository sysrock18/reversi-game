import { TestBed, inject } from '@angular/core/testing';

import { SwaggerApiService } from './swagger-api.service';

describe('SwaggerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwaggerApiService]
    });
  });

  it('should be created', inject([SwaggerApiService], (service: SwaggerApiService) => {
    expect(service).toBeTruthy();
  }));
});
