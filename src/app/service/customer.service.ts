import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = "http://localhost:3000/customer";

  constructor(private http: HttpClient) { }

  getCustomer(){
    return this.http.get(this.url);
  }

  deleteCustomer(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }

  addCustomer(data: any){
    console.log(data)
    return this.http.post(this.url, data);
  }

  updateCustomer(id: any, data: any){
    return this.http.put(`${this.url}/${id}`, data);
  }

  getSingleCustomer(id: any){
    return this.http.get(`${this.url}/${id}`)
  }

}
