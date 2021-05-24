import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CustomerService } from './../customer.service';
import { Customer } from './../model/customer.model';
import { Observable } from "rxjs";  

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  public searchText : string;
  p: any;
  private _allCust: Observable<Customer[]>;  
  public get allCust(): Observable<Customer[]> {  
    return this._allCust;  
  }  

  public set allCust(value: Observable<Customer[]>) {  
    this._allCust = value;  
  } 
  customers: Customer[] = [];
  constructor(private router: Router, private customerservice: CustomerService) { }

  loadDisplay(){  
    debugger;  
    this._allCust= this.customerservice.getcustomers();  
  
  }
  
  ngOnInit() {
    this.customerservice.getcustomers().subscribe(data => {
      this.customers = data;
      this.loadDisplay();  
    })
  }

  getcustomers(){
  }
  
  deletecustomer(customer: Customer): void {
    this.customerservice.deletecustomer(customer.id)
      .subscribe(data => {
        this.customers = this.customers.filter(u => u !== customer);
      })
  };

  editcustomer(customer: Customer): void {
    localStorage.removeItem("editcustomerId");
    localStorage.setItem("editcustomerId", customer.id.toString());
    this.router.navigate(['edit-customer']);

  };

  addcustomer(): void {
    this.router.navigate(['add-customer']);
  };
}
