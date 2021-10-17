import { Request, Response } from 'express'

const UserController = (req: Request, res: Response) => {
    console.log('--CONTROLLER--');
        
    const {name, email, password, passwordConfirmation} = req.body

    // if (!name) {
    //     res.status(400).json({message: 'name parameter must be defined'})
    // }
    
    // if (!email) {
    //     res.status(400).json({message: 'email parameter must be defined'})
    // }

    // if (!password) {
    //     res.status(400).json({message: 'password parameter must be defined'})
    // }

    // if (!passwordConfirmation) {
    //     res.status(400).json({message: 'password confirmation parameter must be defined'})
    // }

    // if (password !== passwordConfirmation) {
    //     res.status(400).json({message: 'password and passwordConfirmation does not match'})
    // }

    // if (!email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
    //     res.status(400).json({message: 'email isn\'t a valid e-mail address'})
    // }

    res.status(200).json();
}

export default UserController