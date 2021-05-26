import { TestBed } from '@angular/core/testing';

import { CrudBService } from './crud-b.service';

describe('CrudBService', () => {
  let service: CrudBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
