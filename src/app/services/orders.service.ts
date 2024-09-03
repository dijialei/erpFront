import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private _backUrl = environment.url;

  constructor(private http:HttpClient) { }

  addOrder(obj:any){
    return this.http.post(`${this._backUrl}/orders`,obj,{observe:'response'});
  }
  findAllByUserId(status:string){
    return this.http.get<Order[]>(`${this._backUrl}/orders`,{params:{status},observe:'response'});
  }
}
