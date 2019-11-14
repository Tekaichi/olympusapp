import { TestBed } from '@angular/core/testing';

import { DeleteProcedureService } from './delete-procedure.service';

describe('DeleteProcedureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteProcedureService = TestBed.get(DeleteProcedureService);
    expect(service).toBeTruthy();
  });
});
