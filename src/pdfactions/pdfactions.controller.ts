

import { Controller, Get, Param, Res ,Post,Body} from '@nestjs/common';
import { Response } from 'express';
import { PdfactionsService } from './pdfactions.service';

@Controller('pdfactions')
export class PdfactionsController {
    constructor(private readonly pdfactionsService: PdfactionsService) {}

    @Post()
    async generatePdf(@Body() userData: any, @Res() res: Response) {
     console.log("user data 111");
      console.log(userData);
      // console.log("u1",userData[1].phoneNumber)
      const filePath = await this.pdfactionsService.generatePdf(userData);
      console.log("file path in controller")
      res.sendFile(filePath);
    }
    @Get('/pdf-url')
    getPdfUrl(): string {
      return this.pdfactionsService.getTopmostPdfUrl();
    }
    
}

