import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  userid:any=""
  data:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userinfo")
    let data1:any=  {
      "id": this.userid
  }

    api.searchProfile(data1).subscribe(
      (generated:any)=>{
        console.log(generated)
        this.data=generated

      }
    )
  }


}
