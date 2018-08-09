import { Injectable } from '@angular/core'
@Injectable()
export class CollectionCentersService {
    collectionCenters = [{ id: 1, title: "Titulo 1", description: "Descripcion" }, { id: 2, title: "Titulo 2", description: "Descripcion 2" }];

    public getCollectionCenters() {
        return this.collectionCenters;
    }
    public detailCollectionCenter(id) {
        return this.collectionCenters.filter(
            function (collectionCenter, i) {
                return collectionCenter.id == id
            })[0] || { id: null, title: null, description: null }
    }

    public createCollectionCenter(collectionCenter){
        this.collectionCenters.push(collectionCenter);
    }

    public editCollectionCenter(collectionCenter) {
        for (let i; i < this.collectionCenters.length; i++) {
            if (this.collectionCenters[i].id == collectionCenter.id) {
                this.collectionCenters[i] = collectionCenter;
            }
        }
    }
    public deleteCollectionCenter(collectionCenter){
        for (let i; i < this.collectionCenters.length; i++) {
            if (this.collectionCenters[i].id == collectionCenter.id) {
                this.collectionCenters.splice(i,1);
            }
        }
    }
}