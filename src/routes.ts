import {Router} from 'express';
const router = Router();

import {CreateUserController} from './controlers/user/CreateUserController'
import {AuthUserController} from './controlers/user/AuthUserController'

router.post('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

export {router};