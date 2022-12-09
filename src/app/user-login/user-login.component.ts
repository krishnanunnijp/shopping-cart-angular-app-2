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
  data1:any=[]
  readData=()=>{
    let data:any={
      "email":this.email,
      "password":this.password
    }
    this.api.fetchPassword(data).subscribe(
      (generated:any)=>{
        this.data1=generated
        console.log(this.data1)
        if(generated.status=="success"){
          localStorage.setItem("nav","1")
          console.log(this.data1.id)
          localStorage.setItem("userinfo",this.data1.id)
          this.router.navigate(['/profile'])
         
        }else{
          alert("invalid password")
        }
      }
    )


  }

}
