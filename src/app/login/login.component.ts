import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private fb:FormBuilder,private http:HttpClient,private route:Router){

}
Login=this.fb.group({
  email:[''],
  password:['']
});


// checkLogin(){
// this.http.get<any>("http://localhost:3000/users").subscribe((x)=>{
//   return x.email===this.Login.value.email&&x.password===this.Login.value.password;
// })
// }
}
