

import prisma from '@prisma/client'

interface UserRequest{
    name: string;
    email: string;
    password: string;
    role: number;
    username: string 
}


class CreateUserService{
    async execute({name, email, password,role,username}: UserRequest){
        console.log(name, email, password,role,username);
        
       if(!email){
        throw new Error ("Email incorreto!")
       }
       const userAlreadyExists = await prisma.user.findFirst({
        where:{
            email: email
        }
       })
    }
}

export {CreateUserService};