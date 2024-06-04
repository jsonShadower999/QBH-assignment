import { Test, TestingModule } from '@nestjs/testing';
import { PdfactionsController } from './pdfactions.controller';

describe('PdfactionsController', () => {
  let controller: PdfactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfactionsController],
    }).compile();

    controller = module.get<PdfactionsController>(PdfactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
