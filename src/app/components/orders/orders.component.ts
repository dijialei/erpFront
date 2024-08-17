
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule,CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
  providers:[provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  selected!:Date;
  date!:string;
  ngOnInit(): void {
   
  }

}
