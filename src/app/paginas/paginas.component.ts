import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styles: [],
})
export class PaginasComponent implements OnInit {
  close = false;

  constructor() {}

  ngOnInit(): void {}
  openCloseMenu(): void {
    this.close = !this.close;
  }
}
