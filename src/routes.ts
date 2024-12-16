import {Router} from 'express';
const router = Router();

import {CreateUserController} from './controlers/CreateUserController'

router.post('/user', new CreateUserController().handle)

export {router};