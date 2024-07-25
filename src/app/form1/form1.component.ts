import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.scss'
})
export class Form1Component {

checkForm(formdata:any){
console.log(formdata)
}
 
}
