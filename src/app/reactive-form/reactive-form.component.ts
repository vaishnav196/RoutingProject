import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

constructor(private fb:FormBuilder){

}


  formDetails=new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl(''),
    Contact: new FormControl('')
});

get name(){
  return this.formDetails.controls.name
}
get email(){
  return this.formDetails.controls.email
}
get Contact(){
  return this.formDetails.controls.Contact
}
}
