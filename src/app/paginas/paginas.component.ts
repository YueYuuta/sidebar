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

  open(): void {
    if (this.close) {
      document.body.classList.remove('size__menu');
      document.body.classList.add('size__menu_close');
    } else {
      document.body.classList.remove('size__menu_close');
      document.body.classList.add('size__menu');
    }
    this.close = !this.close;
  }
}
