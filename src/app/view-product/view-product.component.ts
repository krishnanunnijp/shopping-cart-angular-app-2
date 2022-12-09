import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  data :any =[]
  nav:any=localStorage.getItem("nav")
  constructor(private api:ApiService){
    
    api.fetchProduct().subscribe(
      (readValue)=>{
        this.data=readValue
      }
    )
  }

}
