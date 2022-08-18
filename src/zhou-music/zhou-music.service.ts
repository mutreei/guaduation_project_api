import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize'
import Zhou_music from './zhouMusic.model';

@Injectable()
export class ZhouMusicService {
    constructor(
        @InjectModel(Zhou_music)
        private zhouMusic: typeof Zhou_music
    ) { }
    
    getAllZhouMusic() {
        return this.zhouMusic.findAll()
    }
}
