import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerService } from 'src/app/services/cutomer.service';
import { Customer, Representative } from '../models/customer';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ListaProductoComponent implements OnInit {
  customers: Customer[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    //esto es para simular que se trae data de una api el settimeout se le puso una espera de 1000 milisegundos antes de ejecutar el codigo que lleva dentro
    setTimeout(() => {
      this.customers = this.customerService.getCustomersLarge();
      this.loading = false;
      this.customers.forEach(
        (customer) => (customer.date = new Date(customer.date))
      );
    }, 1000);

    // this.customerService.getCustomersLarge().then((customers) => {
    //   this.customers = customers;
    //   this.loading = false;

    //   this.customers.forEach(
    //     (customer) => (customer.date = new Date(customer.date))
    //   );
    // });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'XuXue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }
}
