import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reset } from '../model/Rest';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  private url: string = "http://localhost:4992";
 
  constructor(private http: HttpClient) { }
 
  verifyOTP(reset: Reset): Observable<any>  {
    return this.http.post<any>(this.url+"/verifyResetOTP", reset);
  }
 
  resendOtp(reset: Reset)  {
    // alert("OTP sent to7"reset.email);
  this.http.get(this.url+"/sendResetOTP/"+ reset.email).subscribe();
  }

  // updatePass(reset:Reset){
  //   // alert(reset.email);
  //   this.http.put(this.url+"/updatePassword/", reset).subscribe();
  //   return"Password Updated";
  // }

  // updatePass(data: any): Observable<any> {
  //   return this.http.put<any>(this.url + "/updatePassword", {
  //     email: data.email,
  //     oldPassword: data.oldPass,
  //     newPassword: data.newPass,
  //     confirmPassword: data.confirmPass
  //   });
  // }

  updatePass(reset: Reset): Observable<any> {
    return this.http.put<any>(this.url + "/updatePassword", {
      email: reset.email,
      oldPassword: reset.oldPassword,
      newPassword: reset.newPassword,
      confirmPassword: reset.confirmPassword
    });
  }
}
