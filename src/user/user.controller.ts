import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userServices: UserService){}

    @Get('getUserList')
    findAll(@Res() response: Response){
        console.log('inside user controller - findAll')
        response.status(200).send(this.userServices.findAll());
    }

}
