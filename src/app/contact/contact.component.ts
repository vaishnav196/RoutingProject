import { Component } from '@angular/core';
import { TestService } from '../Services/test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor( private service:TestService){
this.getAllData();
  }
mydata:any
  getAllData(){
   this.mydata= this.service.getData();
  }

}
