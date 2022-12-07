import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  constructor(private api:ApiService){}
  name=""

  data:any=[]
  
  searchE=()=>{
    let data1={
      "name":this.name
    }
    this.api.searchProduct(data1).subscribe(
      (generated:any)=>{
        if(generated.length!=0){
        console.log(generated)
        this.data=generated}
        else{
          alert("invalid")
        }

      }
    )

  }

}
