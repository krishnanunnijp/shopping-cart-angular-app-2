import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""
  constructor(private route:Router){}
  login=()=>{
    if(this.username=="admin" && this.password=="12345"){
      localStorage.setItem("nav","<app-navbar-product></app-navbar-product>")
      this.route.navigate(['/add'])
      this.username=""
      this.password=""
    }else{
      alert("invalid login")
    }
  }

}
