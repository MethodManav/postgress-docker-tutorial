import UserModel from "../Model/User";
import { IUser } from "../Model/User";
import { BaseService } from "./BaseService";



export const UserService =  new BaseService<IUser>(UserModel)