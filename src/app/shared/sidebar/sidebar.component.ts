import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarModel } from 'src/app/models/sidebar.modal';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebar: SidebarModel[] = [];
  @Input() close;
  abierto = '';
  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _router: Router
  ) {}
  ngOnInit(): void {
    this.sidebar = this._sidebarService.obtenerMenu();
    console.log('menu', this.close);
  }

  openCloseSubmenu(nombre: string): void {
    if (nombre !== this.abierto) {
      this.abierto = nombre;
    } else {
      this.abierto = '';
    }

    // this.closeSub = !this.closeSub;
  }
  navegar(ruta: string) {
    this._router.navigateByUrl(ruta);
  }
}
