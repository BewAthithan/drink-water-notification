import { Module } from '@nestjs/common';
import { AlertCronService } from './alert-cron.service';
import { AlertCronController } from './alert-cron.controller';

@Module({
  providers: [AlertCronService],
  controllers: [AlertCronController]
})
export class AlertCronModule {}
