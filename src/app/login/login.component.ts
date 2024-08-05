import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



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

  constructor(private fb: FormBuilder,
    private _authService: AuthService,
    private router:Router
  ) {

  }
  ngOnInit(): void {
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

        this.router.navigateByUrl('/home');
      },
      error: error => {
        if (error.status === 401){
          this.errorServer=false;
          this.error401 = true;
        }
        else {
          this.error401=false;
          this.errorServer = true;
        }

      }
    })

  }

}
