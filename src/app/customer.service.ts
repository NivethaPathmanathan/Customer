import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './model/customer.model';
import { Observable } from "rxjs";  

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseurl: string = "http://localhost:3000/customers";

  constructor(private http: HttpClient) {
  }

  getcustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseurl);
  }

  getcustomerById(id: number):Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseurl + '/' + id);
  }

  createcustomer(customer: Customer) {
    return this.http.post(this.baseurl, customer);
  }

  updatecustomer(customer: Customer) {
    return this.http.put(this.baseurl + '/' + customer.id, customer);
  }

  deletecustomer(id: number) {
    return this.http.delete(this.baseurl + '/' + id);
  }
  
  findByTitle(title){
    return this.http.get(this.baseurl + title);
  }

}
