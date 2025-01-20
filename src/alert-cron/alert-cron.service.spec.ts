import { Test, TestingModule } from '@nestjs/testing';
import { AlertCronService } from './alert-cron.service';

describe('AlertCronService', () => {
  let service: AlertCronService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlertCronService],
    }).compile();

    service = module.get<AlertCronService>(AlertCronService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
