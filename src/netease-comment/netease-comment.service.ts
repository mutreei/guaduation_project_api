import { Inject, Injectable } from '@nestjs/common';
import Netease_comment from './netease-comment.model';
import {InjectModel} from '@nestjs/sequelize'

@Injectable()
export class NeteaseCommentService {
    constructor(
        @InjectModel(Netease_comment)
        private netease_comment: typeof Netease_comment
    ) { }

    getAllNeteaseComment() {
        return this.netease_comment.findAll();
    }
}
