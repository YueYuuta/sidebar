import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PaginasComponent],
  imports: [SharedModule, CommonModule, PaginasRoutingModule],
})
export class PaginasModule {}
