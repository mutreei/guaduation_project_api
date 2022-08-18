import { Test, TestingModule } from '@nestjs/testing';
import { NeteaseCommentController } from './netease-comment.controller';

describe('NeteaseCommentController', () => {
  let controller: NeteaseCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeteaseCommentController],
    }).compile();

    controller = module.get<NeteaseCommentController>(NeteaseCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
