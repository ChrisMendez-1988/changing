import { DynamicModule, Module } from '@nestjs/common';
import { LoggerService } from './looger.service';

@Module({})
export class LoggerModule {
  static forRoot(options: any): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useValue: new LoggerService(options),
        },
      ],
      exports: [LoggerService],
    };
  }
}
