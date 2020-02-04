import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginVeterinarioPageRoutingModule } from './login-veterinario-routing.module';

import { LoginVeterinarioPage } from './login-veterinario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginVeterinarioPageRoutingModule
  ],
  declarations: [LoginVeterinarioPage]
})
export class LoginVeterinarioPageModule {}
