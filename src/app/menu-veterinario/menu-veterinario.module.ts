import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuVeterinarioPageRoutingModule } from './menu-veterinario-routing.module';

import { MenuVeterinarioPage } from './menu-veterinario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuVeterinarioPageRoutingModule
  ],
  declarations: [MenuVeterinarioPage]
})
export class MenuVeterinarioPageModule {}
