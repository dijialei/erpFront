import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
