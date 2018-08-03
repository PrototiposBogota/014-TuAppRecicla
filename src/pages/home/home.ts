import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController, public modal: ModalController) {

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
