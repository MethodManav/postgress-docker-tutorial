import { UserService } from './../service/index';

class UserCoontroller {
    static async getAll() {
        UserService.getAll();
    }
    
}