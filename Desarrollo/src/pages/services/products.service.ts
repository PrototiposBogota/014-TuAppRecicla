import { Injectable } from '@angular/core'
@Injectable()
export class ProductsService {
    products = [{ id: 1, title: "Titulo 1", description: "Descripcion" }, { id: 2, title: "Titulo 2", description: "Descripcion 2" }];

    public getProducts() {
        return this.products;
    }
    public detailProduct(id) {
        return this.products.filter(
            function (product, i) {
                return product.id == id
            })[0] || { id: null, title: null, description: null }
    }

    public createProduct(product){
        this.products.push(product);
    }

    public editProduct(product) {
        for (let i; i < this.products.length; i++) {
            if (this.products[i].id == product.id) {
                this.products[i] = product;
            }
        }
    }
    public deleteProduct(product){
        for (let i; i < this.products.length; i++) {
            if (this.products[i].id == product.id) {
                this.products.splice(i,1);
            }
        }
    }
}