import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arr=["hi","kk","haa"];
  title = 'for-loop';
  details = [
    {
      name:'Charan',
      rollnumber:542,
      email:'mini@gmail.com'
    },
    {
      name:'Loke',
      rollnumber:511,
      email:'mini@gmail.com'
    },
    {
      name:'Loki2',
      rollnumber:563,
      email:'mini@gmail.com'
    },
    {
      name:'sumanth',
      rollnumber:550,
      email:'mini@gmail.com'
    }
  ]
  
}
