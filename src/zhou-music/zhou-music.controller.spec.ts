import { Test, TestingModule } from '@nestjs/testing';
import { ZhouMusicController } from './zhou-music.controller';

describe('ZhouMusicController', () => {
  let controller: ZhouMusicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZhouMusicController],
    }).compile();

    controller = module.get<ZhouMusicController>(ZhouMusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
