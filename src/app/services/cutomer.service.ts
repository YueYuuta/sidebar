import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../mocks/customer';
import { Customer } from '../paginas/producto/models/customer';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersLarge(): Customer[] {
    return customer;
  }
}
