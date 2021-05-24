import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { CustomerService } from './customer.service';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerModule } from './/customer.module';
import { RouterModule } from '@angular/router';
import { UserPipe } from './user.pipe';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';   

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    UserPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    CustomerModule,
    RouterModule.forRoot([])
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})


export class AppModule { }
