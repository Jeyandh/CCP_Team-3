import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { CreateComponent } from './Components/create/create.component';
import { DepartmentHomeComponent } from './Components/department-home/department-home.component';
import { DraftComponent } from './Components/draft/draft.component';
import { EmployeeHomeComponent } from './Components/employee-home/employee-home.component';
import { EmployeePageComponent } from './Components/employee-page/employee-page.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PasswordresetComponent } from './Components/passwordreset/passwordreset.component';
import { PollComponent } from './Components/poll/poll.component';
import { PostComponent } from './Components/post/post.component';
import { ProjectHomeComponent } from './Components/project-home/project-home.component';
import { RegionHomeComponent } from './Components/region-home/region-home.component';
import { ResetComponent } from './Components/reset/reset.component';
import { SurveyComponent } from './Components/survey/survey.component';
import { TwoFactorComponent } from './Components/two-factor/two-factor.component';
import { UpdateRegionComponent } from './Components/update-region/update-region.component';
import { UserPageComponent } from './Components/user-page/user-page.component';
import { ViewComponent } from './Components/view/view.component';
import { ViewregionComponent } from './Components/viewregion/viewregion.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Reset',component:ResetComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'Admin',component:AdminPageComponent},
  {path:'RegionHome',component:RegionHomeComponent},
  {path:'Admin/DepartmentHome',component:DepartmentHomeComponent},
  {path:'Admin/ProjectHome',component:ProjectHomeComponent},
  {path:'Admin/EmployeeHome',component:EmployeeHomeComponent},
  {path:'ViewRegion',component:ViewregionComponent},
  {path:'UpdateRegion/:id',component:UpdateRegionComponent},
  {path:'TwoFactor',component:TwoFactorComponent},
  {path:'employeePage',component:EmployeePageComponent},
  {path:'post',component:PostComponent},
  {path:'poll',component:PollComponent},
  {path:'survey',component:SurveyComponent},
  {path:'User',component:UserPageComponent},
  {path:'PasswordReset',component:PasswordresetComponent},
  // {path:'projecthome/viewproject',component:ViewprojectComponent},
  {path:'employeepage',component:EmployeePageComponent},
  
  {path:'departmenthome',component:DepartmentHomeComponent},
  
  // {path:'departmenthome/viewdepartment',component:ViewdepartmentComponent},
  {path:'projecthome',component:ProjectHomeComponent},
  // {path:'viewdepartment',component:ViewdepartmentComponent},
  // {path:'viewproject',component:ViewprojectComponent},

  // { path: 'create', component: CreateComponent },
  { path: 'view', component: ViewComponent },
  {path:'viewEmployee',component:EmployeeComponent},
  {path:'draft', component:DraftComponent},
  {path:'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
