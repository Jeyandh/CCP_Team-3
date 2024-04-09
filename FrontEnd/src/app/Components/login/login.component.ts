import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Login } from '../../model/Login';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginModel: Login = new Login();
  message: string = '';

  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[0-9.a-z._%+-]+@gmail\.com$")]),
      password: new FormControl('',Validators.required)
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginModel.userEmailId = this.loginForm.get('email')!.value;
      this.loginModel.password = this.loginForm.get('password')!.value;

      this.loginService.login(this.loginModel).subscribe(
        (response: any) => {
          if(response.message =="newUser"){
            this.router.navigate(['/PasswordReset']);
          }else{
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('userType', response.userType);
            sessionStorage.setItem('email', response.email);
            sessionStorage.setItem('userId',response.userId);
          this.router.navigate(['/TwoFactor']);
        }
          }
          ,
        (error: any) => {
          this.message = error.error.message;
        }
      );
    }
  }  
}
