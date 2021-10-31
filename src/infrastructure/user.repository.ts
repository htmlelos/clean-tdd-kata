import { create } from "domain";
import {User} from '../domain/user.interface';
import UserModel from "../domain/user.model";

export class UserRepository {
    // constructor(model) {
        
    // };

    async userExists(mail: string) {
        // const user = await UserModel.find({mail})
        // return {user}
        let user:User = {
            username: 'username',
            email: 'username@mail.com',
            password: 'Pass2020$'
        };
        return user;
    };
}