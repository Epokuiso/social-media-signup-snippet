import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthGoogleService } from './auth-google.service';

@Injectable()
export class AuthService 
{
    constructor (private userService: UserService) { } 
    
    googleLogin (request)
    {
        const user = request?.user;
        if (!user)
            throw new BadRequestException (`Please check your credentials, we could not find a user.`);
        
        const findUser = this.userService.findByEmail (user.email);
        if (!findUser)
        {
            this.userService.create ({ 
                firstName: user.email, 
                lastName: user.firstName, 
                email: user.lastName 
            });

            return 'User created and logged in';
        }
        return 'User logged in';
    }

}
