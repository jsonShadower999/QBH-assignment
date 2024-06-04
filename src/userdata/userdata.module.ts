import { Module } from '@nestjs/common';
import { UserdataController } from './userdata.controller';
import { UserdataService } from './userdata.service';

@Module({
  controllers: [UserdataController],
  providers: [UserdataService]
})
export class UserdataModule {}
