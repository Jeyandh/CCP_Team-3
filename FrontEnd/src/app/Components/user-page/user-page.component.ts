import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reset } from '../../model/Rest';
import { ResetService } from 'src/app/Services/reset.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  reset: Reset;
  resendOtp: Reset;
  email!: string;
  constructor(private router:Router,private service: ResetService ){
    this.reset = new Reset();
    this.resendOtp = new Reset();
    
  }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email') || '';
  }
  myPasswordResetFunction(e: any){
    var txt;
  if (confirm("Do you want to reset your password ? Yes or No.")) {
    this.resendOTP();
    this.router.navigate(['Reset']);
    
    
  } else {
   
    location.reload();
  }
 }

 resendOTP()
  {
    this.resendOtp.email=this.email;
    this.service.resendOtp(this.resendOtp);
   
  }

}
