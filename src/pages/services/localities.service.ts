import { Injectable } from '@angular/core'
@Injectable()
export class LocalitiesService {
    localities = [{ id: 1, title: "Titulo 1", description: "Descripcion" }, { id: 2, title: "Titulo 2", description: "Descripcion 2" }];

    public getLocalities() {
        return this.localities;
    }
    public detailLocation(id) {
        return this.localities.filter(
            function (location, i) {
                return location.id == id
            })[0] || { id: null, title: null, description: null }
    }

    public createLocation(location){
        this.localities.push(location);
    }

    public editLocation(location) {
        for (let i; i < this.localities.length; i++) {
            if (this.localities[i].id == location.id) {
                this.localities[i] = location;
            }
        }
    }
    public deleteLocation(location){
        for (let i; i < this.localities.length; i++) {
            if (this.localities[i].id == location.id) {
                this.localities.splice(i,1);
            }
        }
    }
}