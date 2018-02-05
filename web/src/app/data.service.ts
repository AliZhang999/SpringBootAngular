import { Injectable } from '@angular/core';
import { Customer } from './domain/customer';
import { CUSTOMERS } from './mock-customers';
import { Http,Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  private customersUrl = 'api/customer';  // URL to web API

  constructor(private http: Http) { }

  // Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }

  getCustomer(id: number): Promise<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
