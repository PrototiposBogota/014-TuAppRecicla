import { Injectable } from '@angular/core'
@Injectable()
export class HomeService {
    images = [{id: 1, image:'', title:"¿Que és reciclaje?", description:'El reciclaje es un proceso que consiste en obtener una materia prima o producto a partir de un desecho. Este proceso ayuda a reducir el consumo de recursos y la degradación del planeta.'},
    {id: 2, image:'./assets/imgs/reciclar-canecas.jpg', title:"¿Cómo reciclar?", description:'Existen varias formas de reciclar, en las calles de Bogotá puedes encontrar canecas con distintos colores en las cuales puedes depositar ciertos productos:Gris: Papel - CartónAzul: PlásticoVerde: OrdinariosEn los hogares también se puede reciclar utilizando dos tipos de bolsas:Negra: OrdinariosBlanca: Reciclaje'},
    {id: 3, image:'', title:"Categorias",description:'Tenemos 11 categorías dentro del reciclaje:'},
    {id: 4, image:'', title:"Acerca de Nosotros",description:'Tu app recicla es un proyecto que busca generar conciencia sobre la importancia del reciclaje en la vida cotidiana, aquí podrás encontrar:Buscador de productos: Buscar un producto en especifico y saber datos básicos, a que categoría pertenece y en que caneca se debe depositar.Contenidos: Información de interés sobre el reciclajeManualidades: Proyectos que puedes realizar con productos recicladosCentros de acopio: Un mapa con todos los centros de acopio que compran reciclaje.Disfruta, aprende y toma conciencia ¡Registrate!'}];

    public getImages() {
        return this.images;
    }
    public detailProduct(id) {
        return this.images.filter(
            function (image, i) {
                return image.id == id
            })[0] || { id: null, image: null, description: null }
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