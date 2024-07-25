import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
str='masstech';

dt=new Date();
obj={
  "id":"101",
  "name":"Rajesh",
  "salary":"2038"

}
}
