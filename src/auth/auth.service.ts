import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AuthGoogleService } from './auth-google.service';

@Injectable()
export class AuthService 
{
    constructor (private authGoogleService: AuthGoogleService) {} 
    
    googleLogin (request)
    {
        if (!request?.user)
            throw new BadRequestException (`Please check your credentials, we could not find a user.`);
        return request.user;
    }

}
