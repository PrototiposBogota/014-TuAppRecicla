import { Injectable } from '@angular/core'
@Injectable()
export class CategoriesService {
    categories = [{ id: 1, title: "Titulo 1", description: "Descripcion" }, { id: 2, title: "Titulo 2", description: "Descripcion 2" }];

    public getCategories() {
        return this.categories;
    }
    public detailCategory(id) {
        return this.categories.filter(
            function (category, i) {
                return category.id == id
            })[0] || { id: null, title: null, description: null }
    }

    public createCategory(category){
        this.categories.push(category);
    }

    public editCategory(category) {
        for (let i; i < this.categories.length; i++) {
            if (this.categories[i].id == category.id) {
                this.categories[i] = category;
            }
        }
    }
    public deleteCategory(category){
        for (let i; i < this.categories.length; i++) {
            if (this.categories[i].id == category.id) {
                this.categories.splice(i,1);
            }
        }
    }
}