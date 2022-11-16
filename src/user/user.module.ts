import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature ([{name: 'User', schema: UserSchema}])],
  providers: [UserService],
  exports: [UserService, MongooseModule]
})
export class UserModule {}
