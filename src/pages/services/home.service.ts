import { Injectable } from '@angular/core'
@Injectable()
export class HomeService {
    images = [{id: 1, image:'', description:'El reciclaje es un proceso que consiste en obtener una materia prima o producto a partir de un desecho. Este proceso ayuda a reducir el consumo de recursos y la degradación del planeta.'},
    {id: 2, image:'', description:'<p>Existen varias formas de reciclar, en las calles de Bogotá puedes encontrar canecas con distintos colores en las cuales puedes depositar ciertos productos:</p><ul><li><strong>Gris:</strong> Papel - Cartón</li><li><strong>Azul:</strong> Plástico</li><li><strong>Verde:</strong> Ordinarios</li></ul><p>En los hogares también se puede reciclar utilizando dos tipos de bolsas:</p><ul><li><strong>Negra:</strong> Ordinarios</li><li><strong>Blanca:</strong> Reciclaje</li></ul>'},
    {id: 3, image:'', description:'<p>Tenemos 11 categorías dentro del reciclaje:</p>'},
    {id: 4, image:'', description:'<p>Tu app recicla es un proyecto que busca generar conciencia sobre la importancia del reciclaje en la vida cotidiana, aquí podrás encontrar:</p><ol><li><strong>Buscador de productos:</strong> Buscar un producto en especifico y saber datos básicos, a que categoría pertenece y en que caneca se debe depositar.</li><li><strong>Contenidos:</strong> Información de interés sobre el reciclaje</li><li><strong>Manualidades:</strong> Proyectos que puedes realizar con productos reciclados</li><li><strong>Centros de acopio:</strong> Un mapa con todos los centros de acopio que compran reciclaje.</li></ol><strong>Disfruta, aprende y toma conciencia ¡Registrate!</strong>'}];

    public getImages() {
        return this.images;
    }
    public detailProduct(id) {
        return this.images.filter(
            function (image, i) {
                return image.id == id
            })[0] || { id: null, title: null, description: null }
    }

    public createProduct(image){
        this.images.push(image);
    }

    public editProduct(image) {
        for (let i; i < this.images.length; i++) {
            if (this.images[i].id == image.id) {
                this.images[i] = image;
            }
        }
    }
    public deleteProduct(image){
        for (let i; i < this.images.length; i++) {
            if (this.images[i].id == image.id) {
                this.images.splice(i,1);
            }
        }
    }
}