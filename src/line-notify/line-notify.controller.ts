import { Controller, Post, Body } from '@nestjs/common';
import { LineNotifyService } from './line-notify.service';

@Controller('line-notify')
export class LineNotifyController {
  constructor(private readonly lineNotifyService: LineNotifyService) {}

  @Post('send')
  async sendNotification(@Body() body: { message: string }): Promise<string> {
    const { message } = body;
    await this.lineNotifyService.sendNotification(message);
    return 'Notification sent!';
  }
}
