
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule,CommonModule,ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
  providers:[provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  selected!:Date;
  orderForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private _ordersService:OrdersService
  ){

  }
  ngOnInit(): void {
   this.orderForm = this.fb.group({
    id:['',[Validators.required]],
    reference:['',[Validators.required]],
    client:['',[Validators.required]],
    model:['',[Validators.required]],
    sn:['',[Validators.required]],
    registrationTime:[new Date(),[Validators.required]],
    description:['',[Validators.required]],
    result:['',[Validators.required]],
    replaceAdvance:[false,[Validators.required]],
   });
   this._ordersService.findAllById().subscribe({
    next: res=>{
      console.log(res.body);      
    },
    error:err=>{
      console.log(err);
      
    }
   })
  }

  get id(){
    return this.orderForm.get('id') as FormControl;
  }
  get reference(){
    return this.orderForm.get('reference') as FormControl;
  }
  get client(){
    return this.orderForm.get('client') as FormControl;
  }
  get model(){
    return this.orderForm.get('model') as FormControl;
  }
  get sn(){
    return this.orderForm.get('sn') as FormControl;
  }
  get registrationTime(){
    return this.orderForm.get('registrationTime') as FormControl;
  }
  get description(){
    return this.orderForm.get('description') as FormControl;
  }
  get result(){
    return this.orderForm.get('result') as FormControl;
  }
  get replaceAdvance(){
    return this.orderForm.get('replaceAdvance') as FormControl;
  }

  onSubmit(){
    
    console.log(this.orderForm.value);
    this._ordersService.addOrder(this.orderForm.value).subscribe({
      next:res=>{
        console.log(res.body);
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
    
    this.orderForm.reset();
  }
  selectedChange(){
    this.registrationTime.setValue( new Date(this.selected.getTime() - this.selected.getTimezoneOffset() * 60000));    
  }

}
