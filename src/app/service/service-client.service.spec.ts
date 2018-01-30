import { TestBed, inject } from '@angular/core/testing';

import { ServiceClientService } from './service-client.service';

describe('ServiceClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceClientService]
    });
  });

  it('should be created', inject([ServiceClientService], (service: ServiceClientService) => {
    expect(service).toBeTruthy();
  }));
});
