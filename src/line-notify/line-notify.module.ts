import { Module } from '@nestjs/common';
import { LineNotifyService } from './line-notify.service';
import { LineNotifyController } from './line-notify.controller';

@Module({
  providers: [LineNotifyService],
  controllers: [LineNotifyController]
})
export class LineNotifyModule {}
