import { Injectable } from '@nestjs/common';
import { CreatePostCreateDto } from './dto/create-post-create.dto';
import { UpdatePostCreateDto } from './dto/update-post-create.dto';
import { PostCreate } from './schemas/post-create.schema';
import { PostCreateModule } from './post-create.module';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostCreateService {

  constructor(
    @InjectModel("postCreate")
    private readonly postCreateModel: Model<PostCreate>,
    private readonly jwtService:JwtService
  ) {}

  async createPost(postCreate: PostCreate) {
    try {
      console.log('postCreate', postCreate);
    
    const response = await this.postCreateModel.create(postCreate)

    return {
      success: true,
      message: "Post created successfully",
      data: response,
    };

    } catch (error) {
      return {
        success: false,
        message: "Post created Unsuccessfully",
        error: error,
      };
    }
    
  }

  async getAllPost(){
     try {
      const response = await this.postCreateModel.find().exec();
      return {
        success: true,
        message: "Post fetched successfully",
        data: response,
      };
      
     } catch (error) {
       return {
        success: false,
        message: "Created Fetch Unsuccessfully",
        error: error,
       }
     }
  }

  // findAll() {
  //   return `This action returns all postCreate`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} postCreate`;
  // }

  // update(id: number, updatePostCreateDto: UpdatePostCreateDto) {
  //   return `This action updates a #${id} postCreate`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} postCreate`;
  // }
}
