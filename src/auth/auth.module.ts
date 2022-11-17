import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { AuthGoogleService } from './auth-google.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, AuthGoogleService]
})
export class AuthModule {};
