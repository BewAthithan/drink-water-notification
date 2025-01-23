import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AlertCronService {
  private readonly apiUrl = 'https://notify-api.line.me/api/notify';
  private readonly token = 'BdfoAPq1bob1cGELHhrffGMmxG6urJZj9Vwt1k6mJu3';

  constructor(private readonly httpService: HttpService) {}
  //   @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  //   handleMidnightTask() {
  //     console.log('Task is running at midnight!');
  //     // Add your task logic here
  //   }

  // // Custom Cron Expression: Runs every minute
  // @Cron('*/1 * * * *')
  // async handleMinuteTask() {
  //   console.log('Task is running every minute!');
  //   const payload = { message: 'Test task is running every minute!' };

  //   try {
  //     // Sending the API request
  //     const response = await lastValueFrom(
  //       this.httpService.post(this.apiUrl, payload, {
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //           Authorization: `Bearer ${this.token}`,
  //         },
  //       }), // Use `.get` for GET requests
  //     );
  //     console.log('API Response:', response.data);
  //   } catch (error) {
  //     console.error('Error triggering API:', error.message);
  //   }
  // }

  // Custom Task with Dynamic Logging
  // @Cron('0 9 * * *') // Runs daily at 9:00
  @Cron(CronExpression.EVERY_DAY_AT_9AM) // Runs daily at 9:00
  async handle9AMTask() {
    console.log('Custom task is running at 9:00!');
    const payload = { message: 'น้องมิวกินน้ำตอนเช้ารึยัง' };

    try {
      // Sending the API request
      const response = await lastValueFrom(
        this.httpService.post(this.apiUrl, payload, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${this.token}`,
          },
        }), // Use `.get` for GET requests
      );
      console.log('API Response - 09:00:', response.data);
    } catch (error) {
      console.error('Error triggering API:', error.message);
    }
  }

  // Custom Task with Dynamic Logging
  // @Cron('0 14 * * *') // Runs daily at 14:00
  @Cron(CronExpression.EVERY_DAY_AT_2PM) // Runs daily at 14:00
  async handle2PMTask() {
    console.log('Custom task is running at 14:00!');
    const payload = { message: 'น้องมิวกินน้ำตอนเที่ยงรึยัง' };

    try {
      // Sending the API request
      const response = await lastValueFrom(
        this.httpService.post(this.apiUrl, payload, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${this.token}`,
          },
        }),
      );
      console.log('API Response - 14:00:', response.data);
    } catch (error) {
      console.error('Error triggering API:', error.message);
    }
  }

  // Custom Task with Dynamic Logging
  // @Cron('0 20 * * *') // Runs daily at 20:00
  @Cron(CronExpression.EVERY_DAY_AT_8PM) // Runs daily at 20:00
  async handle8PMTask() {
    console.log('Custom task is running at 20:00!');
    const payload = { message: 'น้องมิวกินน้ำตอนเย็นรึยัง' };

    try {
      // Sending the API request
      const response = await lastValueFrom(
        this.httpService.post(this.apiUrl, payload, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${this.token}`,
          },
        }),
      );
      console.log('API Response - 20:00:', response.data);
    } catch (error) {
      console.error('Error triggering API:', error.message);
    }
  }
}
