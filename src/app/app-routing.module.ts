import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'menu-veterinario',
    loadChildren: () => import('./menu-veterinario/menu-veterinario.module').then( m => m.MenuVeterinarioPageModule)
  },
  {
    path: 'menu-usuario',
    loadChildren: () => import('./menu-usuario/menu-usuario.module').then( m => m.MenuUsuarioPageModule)
  },
  {
    path: 'datos-mascota',
    loadChildren: () => import('./datos-mascota/datos-mascota.module').then( m => m.DatosMascotaPageModule)
  },
  {
    path: 'login-veterinario',
    loadChildren: () => import('./login-veterinario/login-veterinario.module').then( m => m.LoginVeterinarioPageModule)
  },
  {
    path: 'registro-veterianrio',
    loadChildren: () => import('./registro-veterianrio/registro-veterianrio.module').then( m => m.RegistroVeterianrioPageModule)
  },
  {
    path: 'mostrar-qr',
    loadChildren: () => import('./mostrar-qr/mostrar-qr.module').then( m => m.MostrarQRPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
