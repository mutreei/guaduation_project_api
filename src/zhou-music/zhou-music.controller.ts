import { Controller, Get } from '@nestjs/common';
import { ZhouMusicService } from './zhou-music.service';

@Controller('zhouMusic')
export class ZhouMusicController {
    constructor(
        private readonly service: ZhouMusicService
    ){}

    @Get()
    getAllZhouMusic() {
        return this.service.getAllZhouMusic()
    }
}
