import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reset } from '../../model/Rest';
import { ResetService } from 'src/app/Services/reset.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

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

  // NavReg(){
  //   this.router.navigate(['RegionHome']);
  // }

  // NavDep(){
  //   this.router.navigate(['RegionHome']);
  // }

  get(){
    return sessionStorage.getItem('name');
  }
 
  myPasswordResetFunction(e: any){
    var txt;
  if (confirm("Do you want to reset your password ? Yes or No.")) {
    this.resendOTP();
    this.router.navigate(['Reset']);
    
    
  } else {
   
    this.router.navigate(['Admin']);
  }
 }

 resendOTP()
  {
    this.resendOtp.email=this.email;
    this.service.resendOtp(this.resendOtp);
   
  }
}
