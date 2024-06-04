import { Test, TestingModule } from '@nestjs/testing';
import { PdfactionsService } from './pdfactions.service';

describe('PdfactionsService', () => {
  let service: PdfactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfactionsService],
    }).compile();

    service = module.get<PdfactionsService>(PdfactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
