import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewProductComponent } from './view-product/view-product.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static nav=""

  constructor(private http:HttpClient,) { }
  addUser=(value:any)=>{
    return this.http.post("http://localhost:8080/addUser",value)
  }
  fetchPassword=(value2:any)=>{
    return this.http.post("http://localhost:8080/password",value2)
  }
  fetchProduct=()=>{
    return this.http.get("http://localhost:8080/")
  }
  addProduct=(value3:any)=>{
    return this.http.post("http://localhost:8080/add",value3)
  }
  searchProduct=(value5:any)=>{
    return this.http.post("http://localhost:8080/search",value5)
  }

}
