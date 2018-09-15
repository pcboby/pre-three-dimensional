/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapperService } from './mapper.service';

describe('Service: Mapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapperService]
    });
  });

  it('should ...', inject([MapperService], (service: MapperService) => {
    expect(service).toBeTruthy();
  }));
});
