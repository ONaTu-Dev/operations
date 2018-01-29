import { TestBed, inject } from '@angular/core/testing';

import { OperationservicesService } from './operationservices.service';

describe('OperationservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperationservicesService]
    });
  });

  it('should be created', inject([OperationservicesService], (service: OperationservicesService) => {
    expect(service).toBeTruthy();
  }));
});
