import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

// {
    
//     "firstname": "sudhakar",
//     "lastname": "m",
//     "fullname": "sudhakar reddy",
//     "state": "TS"
// }

// need to add npm i --save class-validator class-transformer
export class UserDTO{
    
    //@IsNotEmpty()
    //id: string ;

    @IsNotEmpty()
    @MinLength(1)
    lastname: string;
    
    @IsNotEmpty()
    @MaxLength(50)
    firstname: string;
    
    @IsNotEmpty()
    fullname : string;

    @IsNotEmpty()
    state : string;

    //@IsEmail()
    //email: string;
}