import dotenv from 'dotenv'
import express, { Request, Router, Response } from 'express'
import userRouter from './infrastructure/user.router'
import errorMiddleWare from './error.middleware';
const server = express();

// Initialize configuration
dotenv.config();
// port is now available to the node runtime as a runtime variable
const port = process.env.SERVER_PORT;

server.use(express.urlencoded({extended: true}))
server.use(express.json())

const router = Router()

server.use('/api', userRouter)
server.use(errorMiddleWare)

server.listen(port, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${port}`);    
})

export default server;