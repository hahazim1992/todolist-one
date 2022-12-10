import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Icustomer } from '../interface/customer';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customer: any;
  singleCustomer: any;

  mockJson = {
    "name": "kitty",
    "gender": "male",
    "dob": "06/06/2022"
  }

  updateJson = {
    "name": "Mossy",
    "gender": "female",
    "dob": "05/05/2022"
  }

  constructor( private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe(x => this.customer = x);
  }

  addCustomer(data: any){
    this.customerService.addCustomer(data).subscribe(x => this.customer.push(data));
    window.location.reload();
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(x => this.customer = this.customer.filter((y:any) => y.id != id));
  }

  toAddPage(){
    this.router.navigate(["add"]);
  }

  //testhazim
  //hazimtest

}
