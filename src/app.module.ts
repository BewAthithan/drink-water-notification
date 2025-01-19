import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineNotifyModule } from './line-notify/line-notify.module';

@Module({
  imports: [LineNotifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
