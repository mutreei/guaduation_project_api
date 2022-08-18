import { Module } from '@nestjs/common';
import { SonglistController } from './songlist.controller';
import { SonglistService } from './songlist.service';
import {SequelizeModule} from '@nestjs/sequelize'
import  Songlist  from './songlist.model';

@Module({
    providers: [SonglistService],
    controllers: [SonglistController],
    imports: [SequelizeModule.forFeature([Songlist])],
    exports: [
        SequelizeModule
    ]
})
export class SonglistModule {}
