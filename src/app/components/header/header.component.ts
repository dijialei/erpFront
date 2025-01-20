import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../services/jwt.service';
import { environment } from '../../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  name!:string;

  constructor(private _JwtService:JwtService,
    private _authService:AuthService,
    private router:Router
  ){

  }
  ngOnInit(): void {
    const token = localStorage.getItem(`${environment.tokenName}`) as string;
    const body = this._JwtService.decodeToken(token);
    this.name= body.nickName;
  }
  logout(){
    this._authService.logout().subscribe({
      next : res=>{
        
        localStorage.removeItem(environment.tokenName);
        this.router.navigateByUrl('/login');
        
        
      },
      error: error=>{
        
        console.log(error);
        
      }
    })
  }

}
