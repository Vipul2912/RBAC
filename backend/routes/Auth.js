import express from 'express'
import { CheckUser, Login, Logout, register } from '../controllers/Auth.js'
import { isUser } from '../middleware/verifyToken.js'
const AuthRoutes=express.Router()

AuthRoutes.post('/register',register)
AuthRoutes.post('/login',Login)
AuthRoutes.post('/logout',Logout)
AuthRoutes.get('/checkuser',isUser,CheckUser)


export default AuthRoutes