import { Module } from '@nestjs/common';
import { PostCreateService } from './post-create.service';
import { PostCreateController } from './post-create.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PostCreate } from './schemas/post-create.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'postCreate', schema: PostCreate }]),

    JwtModule.registerAsync({
      useFactory: async() => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '60s',
        },
      }),
    }),
  ],
  

  controllers: [PostCreateController],
  providers: [PostCreateService],
})
export class PostCreateModule {}
