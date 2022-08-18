import { Injectable } from '@nestjs/common';
import  Songlist from './songlist.model';
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class SonglistService {
    constructor(
        @InjectModel(Songlist)
        private songlist: typeof Songlist
    ) { }
    getAllSongList(): any{
        return this.songlist.findAll()
    }
}
