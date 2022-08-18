import { Module } from '@nestjs/common';
import { NeteaseCommentController } from './netease-comment.controller';
import { NeteaseCommentService } from './netease-comment.service';
import { SequelizeModule } from '@nestjs/sequelize'
import Netease_comment from './netease-comment.model';

@Module({
    controllers: [NeteaseCommentController],
    providers: [NeteaseCommentService],
    imports: [SequelizeModule.forFeature([Netease_comment])],
    exports: [SequelizeModule]
})
export class NeteaseCommentModule {}
