import express from 'express';
import http from 'http';
import io from 'socket.io';
import routes from './http/routes';

const app = express();
const server = http.createServer(app);
const socketIo = io(server);


/* CARREGA AS VARIAVEIS DE AMBIENTE */
require('dotenv-safe').config();

app.use(express.json());
app.use(routes);

console.log('rodando');

app.listen(4242);