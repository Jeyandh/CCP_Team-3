import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Region } from '../model/Region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private url:string="http://localhost:4992"

  constructor(private http:HttpClient,private router: Router) { }


  insert(region:Region)
  {
    this.http.post(this.url+"/insertRegions",region).subscribe();
    return "Region Added";

  }

  update(region:Region)
  {
    this.http.put(this.url+"/updateRegions",region).subscribe();
    return "Region Updated";

  }

  delete(region:any)
  {
   
    this.http.delete(this.url+"/deleteRegions/"+region.regionId).subscribe();
    this.router.navigate(['/ViewRegion']);
    return "Region Deleted";

  }


  getAlldetails()
  {
    return this.http.get<Region[]>(this.url+"/findAllRegions");
  }

  getDetails(region:Region){
    return this.http.get<Region[]>(this.url+"/findRegions/"+region.regionId);
  }

  // getDetails(region:Region){
  //   return this.http.get<Region[]>(this.url+"/View/"+region.userName);
  // }


}

