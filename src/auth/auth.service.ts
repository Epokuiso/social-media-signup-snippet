import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService 
{
    constructor (private userService: UserService) { } 
    
    googleLogin (request)
    {
        const user = request?.user;
        if (!user)
            throw new BadRequestException (`Please check your credentials, we could not find a user.`);
        
        
        /*******************************************************
         * Check if the user is already registered, if it is he will logged into the system.
         * If he's not, first the user will registered into the database and will be logged after.
         * ************************************************** */    
        const findUser = this.userService.findByEmail (user.email);
        if (!findUser)
        {
            this.userService.create ({ 
                firstName: user.email, 
                lastName: user.firstName, 
                email: user.lastName 
            });

            //You can add your business logic in this point in order to give the proper treatment.

            return 'User created and logged in';
        }

        //You can add your business logic in this point in order to give the proper treatment.
        return 'User logged in';
    }

}
