import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginasComponent } from './paginas.component';

const routes: Routes = [
  {
    path: '',
    component: PaginasComponent,
    children: [
      {
        path: 'producto',
        loadChildren: () =>
          import('./producto/producto.module').then((m) => m.ProductoModule),
      },
      {
        path: 'cliente',
        loadChildren: () =>
          import('./cliente/cliente.module').then((m) => m.ClienteModule),
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginasRoutingModule {}
