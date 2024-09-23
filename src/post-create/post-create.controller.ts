import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostCreateService } from './post-create.service';
import { CreatePostCreateDto } from './dto/create-post-create.dto';
import { UpdatePostCreateDto } from './dto/update-post-create.dto';
import { PostCreate } from './schemas/post-create.schema';

@Controller('api/v1/create')
export class PostCreateController {
  constructor(
    private readonly postCreateService: PostCreateService
  ) {}

  @Post("post")
  create(@Body() postCreate: PostCreate) {
    return this.postCreateService.createPost(postCreate);
  }

  @Get('get-all')
  findAll() {
    return this.postCreateService.getAllPost();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postCreateService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostCreateDto: UpdatePostCreateDto) {
  //   return this.postCreateService.update(+id, updatePostCreateDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postCreateService.remove(+id);
  // }
}
