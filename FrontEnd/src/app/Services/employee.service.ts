import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../model/Project';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string="http://localhost:4992"

  constructor(private http:HttpClient,private router: Router) { }

  getAllEmployees()
  {
    return this.http.get<User[]>(this.url+"/MapAllEmployees");
  }

  getAllExistingEmployees(){
    return this.http.get<User[]>(this.url+"/findAllEmployees");
  }

  getDetails(project:Project){
    
    return this.http.get<Project[]>(this.url+"/viewProjects/"+project.department);
  }

  getparticularProject(project:Project){
    
    return this.http.get<Project[]>(this.url+"/getProject/"+project.department);
  }
  Configure(user:User)
  {
    this.http.put(this.url+"/updateUsers",user).subscribe();
    return "User Configured";

  }


}
