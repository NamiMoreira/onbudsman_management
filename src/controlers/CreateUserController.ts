import {Request,Response} from 'express';

import {CreateUserService} from '../services/CreateUserService'

class CreateUserController{
    async handle(req: Request , res: Response){
        const {name, email, password,role} = req.body;

        
        const createUserService = new CreateUserService;

        const user = await createUserService.execute({name, email, password,role})
    
        if (user.logError) {
            res.status(user.status)
        }
 
        return res.json(user)
    }

}

export {CreateUserController};
