import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { inject } from '@angular/core';
import { JwtService } from '../services/jwt.service';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem(environment.tokenName);
  let result = false;
  const _JwtService = inject(JwtService);
  const router=inject(Router);
  if(token){
    const body = _JwtService.decodeToken(token);
    result = !_JwtService.isTokenExpired(body);
  }
  if (!result) {
    router.navigateByUrl('/login');
  }

  return result;
};
