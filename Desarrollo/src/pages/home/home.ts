import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  products = [];
  constructor(public navCtrl: NavController, public modal: ModalController, public productsService: HomeService) {
    this.products=productsService.getImages();
    console.log(this.products);
  }

  openModalRegistro(){
    const myModal= this.modal.create('RegisterPage');
    myModal.present();
  }

  openModalLogin(){
    const myModalL= this.modal.create('LoginPage');
    myModalL.present();
  }

  
  
}
