import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuVeterinarioPage } from './menu-veterinario.page';

const routes: Routes = [
  {
    path: '',
    component: MenuVeterinarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuVeterinarioPageRoutingModule {}
