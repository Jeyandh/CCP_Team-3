import { Component } from '@angular/core';
import { User } from '../../model/User';
import { FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { Department } from '../../model/Department';
import { Project } from '../../model/Project';
import { Region } from '../../model/Region';
import { Router } from '@angular/router';
import { DepartmentserviceService } from 'src/app/Services/departmentservice.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ProjectService } from 'src/app/Services/project.service';
import { RegionService } from 'src/app/Services/region.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent {
  user:User;
  result:string="";
  employeeList: User[] = [];
  employeeList1: User[] = [];
  myForm: FormGroup;
  projectList: Project[] = [];
  projectList1: Project[] = [];

  depList: Department[] = [];
  depList1: Department[] = [];
  regList: Region[] = [];
  region: Region;
  project: Project;
  startDate: any;
  department: Department;

  employeeDetail:User;
  employeeDetail1:User;
  flag:boolean;
  flag1:boolean;

 

 
  constructor(private employeeservice:EmployeeService,private service: ProjectService, private router: Router, private departmentService: DepartmentserviceService, private regionservice: RegionService) {
    this.project = new Project;
    this.region = new Region;
    this.user=new User;
    this.employeeDetail=new User;
    this.employeeDetail1=new User;

    this.flag=false;
    this.flag1=true;

   

     this.getAllEmployees();
     
    this.myForm = new FormGroup(
      {


        regionId: new FormControl(''),
        projectId: new FormControl(''),
        projectName: new FormControl(''),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
        departmentId: new FormControl(''),
        userId:new FormControl(''),
        userFirstName: new FormControl(''),
        userLastName: new FormControl(''),
        userEmailId:new FormControl(''),
        userPassword:new FormControl(''),
        userType: new FormControl(''),
        userMobileNumber: new FormControl(''),
        department: new FormControl(''),
        region: new FormControl(''),
        project: new FormArray([], [Validators.required])




      }
    );
 
    this.getAlldepartment();
    this.getAllEmployees() ;
    this.getAllRegion();
    this.getAllProject();
    this.getAllExistingEmployees();
    this.department = new Department;
    this.project = new Project;


  }

  get projectControl(){
    return (<FormArray>this.myForm.get('project')).controls;
   }
  getdepartment(data: any) {
    this.department.region = data.regionId;
    this.departmentService.getParticularDepartment(this.department).subscribe(departments => this.depList = departments)
  }
  getproject(data: any) {
    this.project.department = data.departmentId;
    this.employeeservice.getparticularProject(this.project).subscribe(projects => this.projectList1 = projects)
  }
  getAlldepartment() {
    this.service.getAlldepartments().subscribe(departments => this.depList1 = departments)
  }
  getAllRegion() {

    this.regionservice.getAlldetails().subscribe(regions => this.regList = regions)
  }

  getAllProject() {
    this.service.getAllprojects().subscribe(projects => this.projectList = projects)

  }


  getAllEmployees() {
    this.employeeservice.getAllEmployees().subscribe(users => this.employeeList = users);
  }

  getAllExistingEmployees() {
    this.employeeservice.getAllExistingEmployees().subscribe(employees => this.employeeList1 = employees);
  }



  dataCollect(data: any) {

    this.employeeDetail.userId = data.userId;
    this.employeeDetail.userFirstName=data.userFirstName;
    this.employeeDetail.userLastName=data.userLastName;
    this.employeeDetail.userMobileNumber=data.userMobileNumber;
    this.employeeDetail.userPassword=data.userPassword;
    this.employeeDetail.userEmailId=data.userEmailId;
    this.employeeDetail.userType=data.userType;
   
    this.employeeDetail.department=data.department;
   
    
    this.employeeDetail.region=data.region;
  
    

  

  }
  dataCollect1(data: any) {

    this.employeeDetail1.userId = data.userId;
    this.employeeDetail1.userFirstName=data.userFirstName;
    this.employeeDetail1.userLastName=data.userLastName;
    this.employeeDetail1.userMobileNumber=data.userMobileNumber;
    this.employeeDetail1.userPassword=data.userPassword;
    this.employeeDetail1.userEmailId=data.userEmailId;
    this.employeeDetail1.userType=data.userType;
    this.employeeDetail1.department=data.departmentId;
    this.employeeDetail1.region=data.regionId;
    

  

  }

  update(data: any) {

     

    this.user.userId = this.employeeDetail.userId;
    this.user.userFirstName=data.userFirstName;
    this.user.userLastName=this.employeeDetail.userLastName;
    this.user.userMobileNumber=this.employeeDetail.userMobileNumber;
    this.user.userPassword=this.employeeDetail.userPassword;
    this.user.userEmailId=this.employeeDetail.userEmailId;
    this.user.userType=this.employeeDetail.userType;
    this.user.department=data.departmentId;
    this.user.region=data.regionId;
    this.user.project=data.project;
    this.result = this.employeeservice.Configure(this.user);

  }

  addProject(){
    const control =new FormControl(null,[Validators.required]);
    (<FormArray>this.myForm.get('project')).push(control);
  }

  removeProject(index:number){
    (<FormArray>this.myForm.get('project')).removeAt(index);
    // this.projectControl.removeAt(index);
    
  }


  mapEmployee()
  {
    if(this.flag1==true)
    {
      this.flag1=!this.flag1;
    }

    

    this.flag=!this.flag;
  }

  viewEmployee()
  {
    if(this.flag==true)
    {
      this.flag=!this.flag;
    }

    

    this.flag1=!this.flag1;
  }

  // getProject(userId:number)
  // {
  //   alert(userId);
  // }

  

}

