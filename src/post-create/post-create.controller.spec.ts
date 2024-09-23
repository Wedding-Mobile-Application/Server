import { Test, TestingModule } from '@nestjs/testing';
import { PostCreateController } from './post-create.controller';
import { PostCreateService } from './post-create.service';

describe('PostCreateController', () => {
  let controller: PostCreateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostCreateController],
      providers: [PostCreateService],
    }).compile();

    controller = module.get<PostCreateController>(PostCreateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
