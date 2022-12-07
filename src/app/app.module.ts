import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddProductComponent } from './add-product/add-product.component'
const myRouter:Routes=[
  {
    path:"",
    component: AdminLoginComponent
  },{
    path:"signup",
    component: RegisterUserComponent
  },{
    path:"user",
    component: UserLoginComponent
  },{
    path:"add",
    component: AddProductComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    RegisterUserComponent,
    UserLoginComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
