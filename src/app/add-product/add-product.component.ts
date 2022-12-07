import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private api:ApiService){}
  name=""
  price=""
  description=""
  image=""
  category=""


  addProduct=()=>{
    let data:any={
      "name":this.name,
      "price":this.price,
      "description":this.description,
      "image":this.image,
      "category":this.category
  }
  this.api.addProduct(data).subscribe(
    (generated:any)=>{
      console.log(generated)
      if(generated.status=="success"){
        alert("added")
        this.name=""
        this.price=""
        this.description=""
        this.image=""
        this.category=""
      }
    }
  )

  }

}
