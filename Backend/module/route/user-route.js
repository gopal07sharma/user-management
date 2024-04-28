import express from 'express';
import { login, register } from '../controller/user-controller.js';
export const userRoute = express.Router();
userRoute.post('/login', login)
userRoute.post('/register', register)