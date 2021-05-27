import { ApiResponse } from '@nestjs/swagger';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';

// file system
import * as fs from 'fs';
import * as path from 'path';

const uploadFileFolder = process.env.UPLOADED_FILES_FOLDER;

@Controller('upload')
@UseInterceptors(FileInterceptor('file'))
export class UploadController {
  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const savedFilesFolder = path.join(process.cwd(), `${uploadFileFolder}/${file.originalname}`);
      fs.createWriteStream(savedFilesFolder);
      return file
    } catch (e) {
      console.error(`File Error :`, file);
    }
  }
}
