import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    DataViewModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
