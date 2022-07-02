import { TestBed } from '@angular/core/testing';

import { QrCodeGenService } from './qr-code-gen.service';

describe('QrCodeGenService', () => {
  let service: QrCodeGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrCodeGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
