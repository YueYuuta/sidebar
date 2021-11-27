import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
const ruta = environment.ruta;

const routes: Routes = [
  {
    path: 'paginas',
    loadChildren: () =>
      import('./paginas/paginas.module').then((m) => m.PaginasModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: 'paginas', pathMatch: 'full' },
  { path: '**', redirectTo: 'paginas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
