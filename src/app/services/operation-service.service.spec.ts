import { TestBed, inject } from '@angular/core/testing';

import { OperationServiceService } from './operation-service.service';

describe('OperationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperationServiceService]
    });
  });

  it('should be created', inject([OperationServiceService], (service: OperationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
