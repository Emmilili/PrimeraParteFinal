import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroVeterianrioPageRoutingModule } from './registro-veterianrio-routing.module';

import { RegistroVeterianrioPage } from './registro-veterianrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroVeterianrioPageRoutingModule
  ],
  declarations: [RegistroVeterianrioPage]
})
export class RegistroVeterianrioPageModule {}
