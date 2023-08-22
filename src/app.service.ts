import { Injectable } from '@nestjs/common';
import { MyLogger } from './new-logger/logger.facade';
@Injectable()
export class AppService {
  logger = new MyLogger();
  getHello(): string {
    this.logger.log('Hello World!');
    return 'Hello World!';
  }
}
