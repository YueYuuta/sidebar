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
      Nombre: 'Categoria',
      Icono: 'bx bx-collection',
      Ruta: `${ruta}/categoria`,
      SubMenu: [
        { Nombre: 'HTML & CSS', Ruta: `${ruta}/categoria/crear-categoria` },
        { Nombre: 'JavaScript' },
      ],
    },
    {
      Nombre: 'Post',
      Icono: 'bx bx-pie-chart-alt-2',
      SubMenu: [{ Nombre: 'Web Design' }, { Nombre: 'Login Form' }],
    },
  ];

  constructor() {}

  obtenerMenu(): SidebarModel[] {
    return this.menu;
  }
}
