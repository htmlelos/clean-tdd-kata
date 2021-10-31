export interface User {
    username: string;
    email: string;
    password: string;
}

export type UserFilter = Pick<User, 'username'|'email'>

export type UserList = Pick<User, 'username'|'email'>