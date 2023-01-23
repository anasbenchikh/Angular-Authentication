import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginRequestPayload} from '../../model/login-request-payload';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {LoginResponsePayload} from '../../model/login-response-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isError: boolean;
  loginRequestPayload: LoginRequestPayload;
  constructor(private authService: AuthenticationService, private router: Router) {
    this.loginRequestPayload = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.loginRequestPayload.email = this.loginForm.get('email').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

    return this.authService.login(this.loginRequestPayload).subscribe(data => {
            this.isError = false;
            this.router.navigateByUrl('dashboard');
            }, error => {
             this.isError = true;
             throwError(error);
    });
  }
}
