import { Body, Controller, Get, Param, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user') // http path
//@Controller()
export class UserController {

    constructor(private readonly userServices: UserService){}

    @Get('getUserList')
    getUserList(){
        console.log('inside user controller - findAll')
        return this.userServices.getUserList();
    }

    @Post('addUser')
    @UsePipes(ValidationPipe)
    addUser(@Body() userDto:UserDTO){
      console.log('inside user controller - adduser');
      return this.userServices.addUser(userDto);
    }

    @Get('getUserListById/:id')
    getUserListById(@Param('id') id:string){
      console.log('inside user controller - getUserListById ' + id);
      return this.userServices.getUserListById(id);
    }

}
