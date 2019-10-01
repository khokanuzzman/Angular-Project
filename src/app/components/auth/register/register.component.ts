import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import * as firebase from 'firebase/app';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  public errorMessage:any;
  public successMessage:any;
  constructor(public authService:AuthenticationService) { }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });
  
  
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

}
