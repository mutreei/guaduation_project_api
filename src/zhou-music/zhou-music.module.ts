import { Module } from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize'
import { ZhouMusicController } from './zhou-music.controller';
import { ZhouMusicService } from './zhou-music.service';
import Zhou_music from './zhouMusic.model';

@Module({
    imports: [SequelizeModule.forFeature([Zhou_music])],
    providers: [ZhouMusicService],
    controllers: [ZhouMusicController],
    exports: [SequelizeModule]
})
export class ZhouMusicModule {}
