import { Injectable } from '@angular/core'
@Injectable()
export class UsersService {
    users = [{ id: 1, title: "Titulo 1", description: "Descripcion" }, { id: 2, title: "Titulo 2", description: "Descripcion 2" }];

    public getUsers() {
        return this.users;
    }
    public detailUser(id) {
        return this.users.filter(
            function (user, i) {
                return user.id == id
            })[0] || { id: null, title: null, description: null }
    }

    public createUser(user){
        this.users.push(user);
    }

    public editUser(user) {
        for (let i; i < this.users.length; i++) {
            if (this.users[i].id == user.id) {
                this.users[i] = user;
            }
        }
    }
    public deleteUser(user){
        for (let i; i < this.users.length; i++) {
            if (this.users[i].id == user.id) {
                this.users.splice(i,1);
            }
        }
    }
}