import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api:ApiService,private router:Router){}
  email=""
  password=""
  readData=()=>{
    let data:any={
      "email":this.email
    }
    this.api.fetchPassword(data).subscribe(
      (generated:any)=>{
        if(generated.password== this.password){
          this.router.navigate(['/search'])
          ApiService.nav="<app-user-navbar></app-user-navbar>"
          
        }else{
          alert("invalid password")
        }
      }
    )


  }

}
