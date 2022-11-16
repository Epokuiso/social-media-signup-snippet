import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';

interface IUser 
{
    firstName: string;
    lastName: string;
    email: string;
}

@Injectable()
export class UserService 
{
    constructor (@InjectModel ('User') private userModel: Model<UserDocument>) {}

    async findByEmail (email: string)
    {
        return await this.userModel.findOne ({ email });
    }

    async create (userInformation: IUser)
    {
        const newUser = await this.userModel.create (userInformation);
        await newUser.save ();
    }
}
