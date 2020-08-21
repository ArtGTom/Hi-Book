import express, { request, response } from 'express';
import {Login, Register} from './services/auth.service';
import { RegisterUser } from '../models/User.model';
import { verifyToken, getUserByToken } from '../utils/JWTAuthentication';

const routes = express.Router();

routes.post('/users', async (request, response) => {
    let user: RegisterUser = request.body;

    await Register(user)
        .then(result => response.status(201).json(result))
        .catch(reject => response.status(400).json(reject));
});

routes.post('/login', async (request, response) => {
    let credentials: {login: string, password: string} = request.body;
    
    await Login(credentials)
        .then(result => response.status(200).json(result))
        .catch(reject => response.status(400).json(reject));
});

routes.get('/profile', verifyToken, async (request, response) => {
    await getUserByToken(request)
        .then(result => response.status(200).json(result))
        .catch(err => response.status(400). json(err))
});


export default routes;