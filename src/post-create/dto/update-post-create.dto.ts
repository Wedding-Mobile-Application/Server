import { PartialType } from '@nestjs/mapped-types';
import { CreatePostCreateDto } from './create-post-create.dto';

export class UpdatePostCreateDto extends PartialType(CreatePostCreateDto) {}
