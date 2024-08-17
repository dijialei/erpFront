import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from '../../services/jwt.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error401 = false;
  errorServer = false;
  returnUrl = '';
  token = localStorage.getItem(environment.tokenName);

  constructor(private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private _jwtService: JwtService
  ) {

  }
  ngOnInit(): void {

    if (this.token && !this._jwtService.isTokenExpired(this._jwtService.decodeToken(this.token))) {
      this.router.navigateByUrl('/home');
    }
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '/home';

    })
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }
  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  onSubmit() {
    this._authService.login(this.loginForm.value).subscribe({
      next: res => {
        localStorage.setItem(`${environment.tokenName}`, res.body[`${environment.tokenName}`])

        this.router.navigateByUrl(this.returnUrl);
      },
      error: error => {
        if (error.status === 401) {
          this.errorServer = false;
          this.error401 = true;
        }
        else {
          this.error401 = false;
          this.errorServer = true;
        }

      }
    })

  }

}
