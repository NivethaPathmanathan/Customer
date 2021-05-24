import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from './../customer.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { Customer } from './../model/customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerservice: CustomerService) { }

  ngOnInit() {
    let customerId = localStorage.getItem("editcustomerId");

    if (!customerId) {
      alert("Invalid action.")
      this.router.navigate(['list-customer']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      name: ['', Validators.required],
      active: ['', Validators.required]
    });

    this.customerservice.getcustomerById(+customerId)
      .subscribe(data => {
        this.editForm.setValue(data);
      })
  }

  showMsg: boolean = false;
  onSubmit() {
    this.customerservice.updatecustomer(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-customer']);
          this.showMsg= true;
          this.editForm.reset();
        },
        error => {
          alert(error);
        });
  }
}
