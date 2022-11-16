import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController 
{
    constructor (private readonly authService: AuthService) {}

    @Get()
    greetings ()
    {
        return "Hello World";
    }

    @Get('/google')
    @UseGuards (AuthGuard ('googleService'))
    async googleAuth (@Req() request) {}

    @Get('/google/redirect')
    @UseGuards (AuthGuard ('googleService'))
    async googleAuthRedirect (@Req() request)
    {
        return this.authService.googleLogin (request);
    }
}
