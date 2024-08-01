import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HttpInterceptor works');
    
    const authToken = localStorage.getItem(`${environment.tokenName}`);
    if (typeof authToken==='string'  && authToken !==null && authToken !== undefined && authToken.trim().length > 0) {
      const authRequest = req.clone({
        headers:req.headers.set(`${environment.tokenName}`,`${authToken}`)       
       });
       
       
       return next.handle(authRequest);
    }else{      
      return next.handle(req);
    }
  }
}
