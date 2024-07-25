import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {
  constructor(private fb:FormBuilder){
   
  }
  details=this.fb.group({
    name:['',[Validators.required]],
    email:[''],
    contact:[''],
   
  });

  check(formdetails:any){
console.log(formdetails);
  }

  get name(){
    return this.details.controls.name
  }
  get email(){
    return this.details.controls.email
  }
  get contact(){
    return this.details.controls.contact
  }

}
