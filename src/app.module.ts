import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineNotifyModule } from './line-notify/line-notify.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { AlertCronService } from './alert-cron/alert-cron.service';

@Module({
  imports: [
    LineNotifyModule,
    HttpModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AlertCronService
  ],
})
export class AppModule {}
