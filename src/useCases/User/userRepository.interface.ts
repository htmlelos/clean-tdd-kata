import User, { UserFilter, UserList } from "../../domain/user.interface";

export default interface UserRepository {
    create(user: User):void;
    find(filter?:UserFilter):UserList;
}