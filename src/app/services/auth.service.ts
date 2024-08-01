import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _backUrl = environment.url;
  constructor(private _http:HttpClient) { }

  login(obj:any):Observable<any>{
    
    return this._http.post<any>(`${this._backUrl}/login`,obj,{observe:'response'});

  }
}
