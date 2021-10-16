import dotenv from 'dotenv'
import express from 'express'
const server = express();

// Initialize configuration
dotenv.config();
// port is now available to the node runtime as a runtime variable
const port = process.env.SERVER_PORT;

server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.post('/api/signup', (req, res) => {    
    const {name, email, password, passwordConfirmation} = req.body

    if (!name) {
        res.status(400).json({message: 'name parameter must be defined'})
    }
    
    if (!email) {
        res.status(400).json({message: 'email parameter must be defined'})
    }

    if (!password) {
        res.status(400).json({message: 'password parameter must be defined'})
    }

    if (!passwordConfirmation) {
        res.status(400).json({message: 'password confirmation parameter must be defined'})
    }

    if (password !== passwordConfirmation) {
        res.status(400).json({message: 'password and passwordConfirmation does not match'})
    }

    if (!email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        res.status(400).json({message: 'email isn\'t a valid e-mail address'})
    }

    res.status(200).json();
})

server.listen(port, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${port}`);    
})

export default server;