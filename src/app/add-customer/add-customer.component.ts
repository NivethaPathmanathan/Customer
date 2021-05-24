import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from './../customer.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private customerservice: CustomerService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [""],
      email: ["", Validators.required],
      name: ["", Validators.required, Validators.minLength[2], Validators.maxLength[50]],
      active: [""]
    })

  }
  showMsg: boolean = false;

  onSubmit() {
      debugger;
    this.submitted = true;
    if(this.addForm.invalid) {
      return;
    }
    this.customerservice.createcustomer(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-customer']);
        if (this.addForm.status) {
          this.showMsg = true;
          this.addForm.reset();
        }
      },
        error => {
          alert(error);
        });
  }

}