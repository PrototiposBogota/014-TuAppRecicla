import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContenidosPage } from './contenidos';

@NgModule({
  declarations: [
    ContenidosPage,
  ],
  imports: [
    IonicPageModule.forChild(ContenidosPage),
  ],
})
export class ContenidosPageModule {}
