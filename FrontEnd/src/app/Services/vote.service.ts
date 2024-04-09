import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VoteService {
  private url: string = 'http://localhost:4992';
  constructor(private http: HttpClient) {}

  vote(optionIndex: number) {
    return this.http.post<any>(this.url+'/vote/'+optionIndex, {});
  }

  getVoteCounts() {
    return this.http.get<any>(this.url+'/counts');
  }
}
