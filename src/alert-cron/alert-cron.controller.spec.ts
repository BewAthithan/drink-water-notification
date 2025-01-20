import { Test, TestingModule } from '@nestjs/testing';
import { AlertCronController } from './alert-cron.controller';

describe('AlertCronController', () => {
  let controller: AlertCronController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertCronController],
    }).compile();

    controller = module.get<AlertCronController>(AlertCronController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
