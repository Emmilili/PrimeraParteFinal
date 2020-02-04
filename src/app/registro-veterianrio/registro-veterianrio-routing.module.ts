import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroVeterianrioPage } from './registro-veterianrio.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroVeterianrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroVeterianrioPageRoutingModule {}
