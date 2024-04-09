import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { CommentComponent } from './comments/components/comment/comment.component';
import { CommonModule } from '@angular/common';
import { CommentsModule } from './comments/comments.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './Components/create/create.component';
import { DepartmentHomeComponent } from './Components/department-home/department-home.component';
import { DraftComponent } from './Components/draft/draft.component';
import { EmployeeHomeComponent } from './Components/employee-home/employee-home.component';
import { EmployeePageComponent } from './Components/employee-page/employee-page.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PasswordResetComponent } from './Components/password-reset/password-reset.component';
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
import { EditorModule } from 'primeng/editor';
import { HomeComponent } from './Components/home/home.component';
import { HomeRoutingModule } from './Components/home/home-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    LoginComponent,
    RegionHomeComponent,
    DepartmentHomeComponent,
    ProjectHomeComponent,
    EmployeeHomeComponent,
    ViewregionComponent,
    UpdateRegionComponent,
    TwoFactorComponent,
    EmployeePageComponent,
    PostComponent,
    UserPageComponent,
    PollComponent,
    SurveyComponent,
    NavbarComponent,
    ResetComponent,
    PasswordResetComponent,
    PasswordresetComponent ,
    CreateComponent,
    DraftComponent,
    EmployeeComponent,
    ViewComponent,HomeComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule ,ReactiveFormsModule, BrowserAnimationsModule,MatButtonModule, MatTooltipModule,HttpClientModule,
    CommonModule,CommentsModule, EditorModule ,HomeRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
