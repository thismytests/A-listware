import { Module } from '@nestjs/common';

// config
import { ConfigModule } from 'src/commons/config';

// logger
import { AppLogger } from 'src/commons/logger';

// routes
import { UploadModule } from './routes/upload';

@Module({
  imports: [
    // config
    ConfigModule,

    // routes
    UploadModule,
  ],
  providers: [AppLogger],
})
export class AppModule {
  constructor(public appLogger: AppLogger) {
    this.appLogger.log(process.env);
  }
}
