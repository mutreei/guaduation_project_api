import { Controller, Get } from '@nestjs/common';
import { NeteaseCommentService } from './netease-comment.service';

@Controller('neteaseComment')
export class NeteaseCommentController {
    constructor(
        private readonly neteaseComment: NeteaseCommentService
    ) { }
    
    @Get()
    getAllNeteaseComment() {
        return this.neteaseComment.getAllNeteaseComment()
    }
}
