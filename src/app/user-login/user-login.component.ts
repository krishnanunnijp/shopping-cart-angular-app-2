import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api:ApiService){}
  email=""
  password=""
  readData=()=>{
    let data:any={
      "email":this.email
    }
    this.api.fetchPassword(data).subscribe(
      (generated:any)=>{
        if(generated.password== this.password){
          alert("login success")
        }else{
          alert("invalid password")
        }
      }
    )


  }

}
