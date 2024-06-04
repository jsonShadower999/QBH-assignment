import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserdataController } from './userdata/userdata.controller';
import { UserdataService } from './userdata/userdata.service';
import { AppService } from './app.service';
import { UserdataModule } from './userdata/userdata.module';
import { PlayersService } from './players/players.service';
import { PdfactionsService } from './pdfactions/pdfactions.service';
import { PdfactionsController } from './pdfactions/pdfactions.controller';
import { PdfactionsModule } from './pdfactions/pdfactions.module';

@Module({
  imports: [UserdataModule, PdfactionsModule],
  controllers: [AppController,UserdataController, PdfactionsController],
  providers: [AppService, PlayersService,UserdataService, PdfactionsService],
})
export class AppModule {}

