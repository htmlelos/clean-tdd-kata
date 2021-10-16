export default interface User {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export type UserFilter = Pick<User, 'name'|'email'>

export type UserList = Pick<User, 'name'|'email'>