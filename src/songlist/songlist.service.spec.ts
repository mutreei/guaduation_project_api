import { Test, TestingModule } from '@nestjs/testing';
import { SonglistService } from './songlist.service';

describe('SonglistService', () => {
  let service: SonglistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SonglistService],
    }).compile();

    service = module.get<SonglistService>(SonglistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
