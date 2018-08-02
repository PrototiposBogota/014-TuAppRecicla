import { Injectable } from '@angular/core'
@Injectable()
export class CraftsService {
    crafts = [{ id: 1, title: "Titulo 1", description: "Descripcion" }, { id: 2, title: "Titulo 2", description: "Descripcion 2" }];

    public getCrafts() {
        return this.crafts;
    }
    public detailCraft(id) {
        return this.crafts.filter(
            function (craft, i) {
                return craft.id == id
            })[0] || { id: null, title: null, description: null }
    }

    public createCraft(craft){
        this.crafts.push(craft);
    }

    public editCraft(craft) {
        for (let i; i < this.crafts.length; i++) {
            if (this.crafts[i].id == craft.id) {
                this.crafts[i] = craft;
            }
        }
    }
    public deleteCraft(craft){
        for (let i; i < this.crafts.length; i++) {
            if (this.crafts[i].id == craft.id) {
                this.crafts.splice(i,1);
            }
        }
    }
}