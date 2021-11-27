import { Injectable } from '@angular/core';
import { SidebarModel } from '../models/sidebar.modal';
import { environment } from '../../environments/environment';
const ruta = environment.ruta;

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: SidebarModel[] = [
    { Nombre: 'Dashbard', Icono: 'bx bx-grid-alt' },
    {
      Nombre: 'Producto',
      Icono: 'bx bx-collection',

      SubMenu: [
        { Nombre: 'Lista', Ruta: `/paginas/producto/lista-producto` },
        { Nombre: 'JavaScript' },
      ],
    },
    {
      Nombre: 'Cliente',
      Icono: 'bx bx-pie-chart-alt-2',
      SubMenu: [
        { Nombre: 'Lista', Ruta: '/paginas/cliente/lista-cliente' },
        { Nombre: 'Login Form' },
      ],
    },
  ];

  constructor() {}

  obtenerMenu(): SidebarModel[] {
    return this.menu;
  }
}
