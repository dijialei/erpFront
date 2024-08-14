import { Injectable } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

   decodeToken(token: string): any {
    try {
      return jwtDecode(token);  // 调用 jwt_decode 函数
    } catch (Error) {
      console.error('无效的 token', Error);
      return null;
    }
  }
}
