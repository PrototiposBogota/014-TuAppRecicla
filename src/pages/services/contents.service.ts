import { Injectable } from '@angular/core'
@Injectable()
export class ContentsService {
    contents = [{ id: 1, title: "Titulo 1", description: "Descripcion" }, { id: 2, title: "Titulo 2", description: "Descripcion 2" }];

    public getContents() {
        return this.contents;
    }
    public detailContent(id) {
        return this.contents.filter(
            function (content, i) {
                return content.id == id
            })[0] || { id: null, title: null, description: null }
    }

    public createContent(content){
        this.contents.push(content);
    }

    public editContent(content) {
        for (let i; i < this.contents.length; i++) {
            if (this.contents[i].id == content.id) {
                this.contents[i] = content;
            }
        }
    }
    public deleteContent(content){
        for (let i; i < this.contents.length; i++) {
            if (this.contents[i].id == content.id) {
                this.contents.splice(i,1);
            }
        }
    }
}