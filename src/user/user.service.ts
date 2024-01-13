import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm/entities/user';
import { DataSource, Repository } from 'typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,

        //'@InjectConnection()' is deprecated.
        //'Connection' is deprecated.
        @InjectDataSource()
        private dataSource: DataSource, 

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

    getUserListById(id: string){
        console.log('inside service getUserListById ' + id);
        return this.databaseCall(id);
        //const qry = 'select * from user_info_from_entity where user_id = '+ parseInt(id)
       //console.log('qry : ' + qry)
       //return this.dataSource.query(qry)
    }

    async databaseCall(id: string){
       const qry = 'select * from user_info_from_entity where user_id = '+ parseInt(id)
       console.log('qry : ' + qry)
       return this.dataSource.query(qry)
    }

}
