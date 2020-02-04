import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginVeterinarioPage } from './login-veterinario.page';

const routes: Routes = [
  {
    path: '',
    component: LoginVeterinarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginVeterinarioPageRoutingModule {}
