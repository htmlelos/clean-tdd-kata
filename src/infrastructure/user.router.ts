import { Router, Request, Response } from 'express'
import UserValidator from './user.validator'
import UserController from './user.controller'

const router = Router()

router.post('/signup', UserValidator, UserController )

export default router;