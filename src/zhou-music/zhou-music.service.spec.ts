import { Test, TestingModule } from '@nestjs/testing';
import { ZhouMusicService } from './zhou-music.service';

describe('ZhouMusicService', () => {
  let service: ZhouMusicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZhouMusicService],
    }).compile();

    service = module.get<ZhouMusicService>(ZhouMusicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
