import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addUser=(value:any)=>{
    return this.http.post("http://localhost:8080/addUser",value)
  }
  fetchPassword=(value2:any)=>{
    return this.http.post("http://localhost:8080/password",value2)
  }
}
