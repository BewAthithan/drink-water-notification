import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LineNotifyService {
  private readonly apiUrl = 'https://notify-api.line.me/api/notify';
  private readonly token = 'BdfoAPq1bob1cGELHhrffGMmxG6urJZj9Vwt1k6mJu3';

  async sendNotification(message: string): Promise<void> {
    try {
      await axios.post(
        this.apiUrl,
        new URLSearchParams({ message }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${this.token}`,
          },
        },
      );
      console.log('Notification sent successfully!');
    } catch (error) {
      console.error('Failed to send notification:', error.response?.data || error.message);
    }
  }
}
