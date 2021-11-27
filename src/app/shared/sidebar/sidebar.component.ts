import { Component, OnInit } from '@angular/core';
import { SidebarModel } from 'src/app/models/sidebar.modal';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebar: SidebarModel[] = [];
  close = false;
  abierto = '';
  constructor(private readonly _sidebarService: SidebarService) {}
  ngOnInit(): void {
    this.sidebar = this._sidebarService.obtenerMenu();
    console.log('menu', this._sidebarService.obtenerMenu());
  }

  openCloseSubmenu(nombre: string): void {
    if (nombre !== this.abierto) {
      this.abierto = nombre;
    } else {
      this.abierto = '';
    }

    // this.closeSub = !this.closeSub;
  }
}
