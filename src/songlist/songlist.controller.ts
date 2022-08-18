import { Controller, Get } from '@nestjs/common';
import { SonglistService } from './songlist.service';

@Controller('songlist')
export class SonglistController {
    constructor(private readonly service: SonglistService) { }
    @Get()
    getAllSongList() {
        return this.service.getAllSongList()
    }
}
