import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TwoFactor } from '../model/Twofactor';
 
@Injectable({
  providedIn: 'root'
})
export class TwoFactorService {
  private url: string = "http://localhost:4992";
 
  constructor(private http: HttpClient) { }
 
  verifyOTP(twoFactor: TwoFactor): Observable<any>  {
    return this.http.post<any>(this.url+"/verifyOTP", twoFactor);
  }
 
 
  resendOtp(twoFactor: TwoFactor)  {
  this.http.get(this.url+"/resendOTP/"+ twoFactor.email).subscribe();
  }
}