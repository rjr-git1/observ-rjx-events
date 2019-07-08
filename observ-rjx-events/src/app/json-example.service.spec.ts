import { TestBed } from '@angular/core/testing';

import { JsonExampleService } from './json-example.service';

describe('JsonExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonExampleService = TestBed.get(JsonExampleService);
    expect(service).toBeTruthy();
  });
});
