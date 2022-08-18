import { Test, TestingModule } from '@nestjs/testing';
import { NeteaseCommentService } from './netease-comment.service';

describe('NeteaseCommentService', () => {
  let service: NeteaseCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeteaseCommentService],
    }).compile();

    service = module.get<NeteaseCommentService>(NeteaseCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
