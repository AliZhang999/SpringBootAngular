import { Component, OnInit } from '@angular/core';
import { Customer } from '../domain/customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title = 'app works';
  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private dataService: DataService) { }

  getCustomers () {
    return this.dataService.getCustomers().then(customers => {
      this.customers = customers;
    });
  }

  ngOnInit () {
    this.getCustomers();
  }

}
