import { Module } from '@nestjs/common';
import { PdfactionsController } from './pdfactions.controller';
import { PdfactionsService } from './pdfactions.service';
@Module({controllers: [PdfactionsController],
    providers: [PdfactionsService],})
export class PdfactionsModule {
  

}
