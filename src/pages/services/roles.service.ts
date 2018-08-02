import { Injectable } from '@angular/core'
@Injectable()
export class RolesService {
    roles = [{ id: 1, title: "Titulo 1", description: "Descripcion" }, { id: 2, title: "Titulo 2", description: "Descripcion 2" }];

    public getRoles() {
        return this.roles;
    }
    public detailRol(id) {
        return this.roles.filter(
            function (rol, i) {
                return rol.id == id
            })[0] || { id: null, title: null, description: null }
    }

    public createRol(rol){
        this.roles.push(rol);
    }

    public editRol(rol) {
        for (let i; i < this.roles.length; i++) {
            if (this.roles[i].id == rol.id) {
                this.roles[i] = rol;
            }
        }
    }
    public deleteRol(rol){
        for (let i; i < this.roles.length; i++) {
            if (this.roles[i].id == rol.id) {
                this.roles.splice(i,1);
            }
        }
    }
}