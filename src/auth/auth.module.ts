import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/user/user.service';
import { AuthGoogleService } from './auth-google.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserService],
  controllers: [AuthController],
  providers: [AuthService, AuthGoogleService]
})
export class AuthModule {};
