import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { JwtService } from '../services/jwt.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent implements OnInit {
  token!: string;
  body!: any;
  keys!: string[];
  information!: any;
  changePw!: FormGroup;

  constructor(private _JwtService: JwtService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {

    this.token = localStorage.getItem(`${environment.tokenName}`) as string;
    this.body = this._JwtService.decodeToken(this.token);
    this.keys = Object.keys(this.body);
    this.information = {
      id: this.body.sub,
      firstName: this.body.firstName,
      lastName: this.body.lastName,
      nickName: this.body.nickName,
      email: this.body.email,
      roles: this.body.roles
    }
    this.keys = Object.keys(this.information);
    this.changePw = this.fb.group({
      currentPassword: ["", [Validators.required]],
      newPassword: ["", [Validators.required]],
      confirm: ["", [Validators.required]]
    })
  }

  get currentPassword(){
    return this.changePw.get('currentPassword') as FormControl;
  }
  get newPassword(){
    return this.changePw.get('newPassword') as FormControl;
  }
  get confirm(){
    return this.changePw.get('confirm') as FormControl;
  }

  onSubmit() {
    console.log(this.changePw.value);
    this.changePw.reset();
    
  }
 

}
