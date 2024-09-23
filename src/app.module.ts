import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostCreateModule } from './post-create/post-create.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),

    MongooseModule.forRoot(process.env.MONGO_URL),

    // // register the jwt service
    // JwtModule.registerAsync({
    //   useFactory: async() => ({
    //     secret: process.env.JWT_SECRET,
    //     signOptions: {
    //       expiresIn: '60s',
    //     },
    //   }),
    // }),
    
    
    PostCreateModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
