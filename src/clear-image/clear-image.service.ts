import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as fs from 'fs-extra';

@Injectable()
export class ClearImageService {
  private readonly tempFolderPath = './public/temp';

  @Cron('0 10 * * * *')
  async deleteExpiredImages(): Promise<void> {
    try {
      const files = await fs.readdir(this.tempFolderPath);

      files.forEach(async (file: string) => {
        const filePath = `${this.tempFolderPath}/${file}`;
        const { birthtime } = await fs.stat(filePath);

        const timeDifference = new Date().getTime() - birthtime.getTime();
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));

        if (minutesDifference > 5) {
          await fs.remove(filePath);
          console.log(`Đã xóa tệp tin ${file}`);
        }
      });
    } catch (err) {
      console.error('Lỗi khi xóa ảnh:', err);
    }
  }
}
