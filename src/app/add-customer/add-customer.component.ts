import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  formCustomer: FormGroup;
  buttonLabel = "add";

  customer: any;
  singleCustomer: any;

  constructor(private customerService: CustomerService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.formCustomer = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    
    if(this.activatedRoute.snapshot.url[0].path === "edit") {
      this.getSingleCustomer(this.activatedRoute.snapshot.url[1].path);
      this.buttonLabel = "edit"

    }
    else {

    }
  }

  onSubmit(data: any){
    if(this.activatedRoute.snapshot.url[0].path === "edit") {
      this.updateCustomer(Number(this.activatedRoute.snapshot.url[1].path), data)
    }
    else {
      this.addCustomer(data)
    }
    
  }

  addCustomer(data: any){
    this.customerService.addCustomer(data).subscribe(x => this.customer.push(data));
  }

  updateCustomer(id: number, data: any){
    this.customerService.updateCustomer(id, data).subscribe(x => this.customer = x);
    window.location.reload();
  }

  getSingleCustomer(id: any){
    this.customerService.getSingleCustomer(id).subscribe((x) => {
      this.singleCustomer = x;
      console.log(`singleCustomer`, this.singleCustomer);
      this.formCustomer.controls["name"].setValue(this.singleCustomer?.name);
      this.formCustomer.controls["gender"].setValue(this.singleCustomer?.gender);
      this.formCustomer.controls["dob"].setValue(this.singleCustomer?.dob);
    });
  }

}
