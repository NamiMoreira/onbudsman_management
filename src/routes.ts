import {Router} from 'express';
const router = Router();

import {CreateUserController} from './controlers/user/CreateUserController'
import {AuthUserController} from './controlers/user/AuthUserController'
import { isAuthenticated } from './middlewares/isAuthenticated';
import {CreateOcurrenceController} from './controlers/occurrence/CreateOcurrenceController'


router.post('/user', isAuthenticated, new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.post('/Ocurrence',isAuthenticated, new CreateOcurrenceController().handle)


export {router};