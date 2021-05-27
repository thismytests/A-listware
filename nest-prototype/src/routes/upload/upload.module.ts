import { Module } from '@nestjs/common';

// controllers
import { UploadController } from './upload/upload.controller';

@Module({
  controllers: [UploadController],
})
export class UploadModule {
}
