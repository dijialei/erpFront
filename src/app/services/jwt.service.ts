import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

   decodeToken(token: string): any {
    try {
      return jwtDecode(token);  
    } catch (Error) {
      localStorage.removeItem(environment.tokenName);
      return null;
    }
  }
  isTokenExpired(body: any): boolean {
    let result = true;
    if (!body || !body.exp) {
      return result;
    }

    const currentTime = Math.floor(Date.now() / 1000);  
    result = body.exp < currentTime;
    if(result){
      localStorage.removeItem(environment.tokenName);
    }
    return result;
  }
}
