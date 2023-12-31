import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm/entities/user';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ){}

    getUserList(): Promise<UserDTO[]>{
        return this.userRepository.find();
    }
    
    addUser(userDto: UserDTO){
        console.log('inside adduser service');
        const adduser = this.userRepository.create(userDto);
        console.log('adduser service:: ' + adduser);
        return this.userRepository.save(adduser);
    }

}
