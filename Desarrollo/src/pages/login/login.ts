import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { MenuPage } from '../menu/menu';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFireAuth: AngularFireAuth, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

  login(user: User){
    try{
      this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((firebaseUser) => {
        // Success 
        console.log("aqui");
        this.navCtrl.setRoot(MenuPage);
    }).catch(function(error){

        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Contraseña Incorrecta');
        }else if(errorCode === 'auth/user-not-found') {
          alert('Email Incorrecto');
        }else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }
    catch(e)
    {
      console.error(e);
    }
     
  }

  closeModalLogin(){
    this.view.dismiss();
  }
}
