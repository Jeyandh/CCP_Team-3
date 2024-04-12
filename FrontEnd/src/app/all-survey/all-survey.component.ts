import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Region } from '../Survey-Model/Region';
import { Survey } from '../Survey-Model/survey';
import { Reaction } from '../Survey-Model/Reaction';
import { TemplateService } from '../survey-service/template.service';
import { User } from '../Survey-Model/User';
import { ResponsesummaryService } from '../survey-service/responsesummary.service';
import { ResponseDetail } from '../Survey-Model/ResponseDetail';

@Component({
  selector: 'app-all-survey',
  templateUrl: './all-survey.component.html',
  styleUrls: ['./all-survey.component.css']
})
export class AllSurveyComponent {

  //  For Like
  count: number = 0;

  comment: Comment;
  reactionCount!: number;
  myForm!: FormGroup;
  region!: Region;
  surveymodel: Survey;
  survey: Survey[] = [];
  otherSurvey: Survey[] = [];
  userSurvey: Survey[] = [];
  // comment: Comment[] = [];
  cmtList: Comment[] = [];
  results: string = "";
  reactCount: number = 0;

  

  reaction: Reaction;
  reactionList: Reaction[] = [];
  responseDetail:ResponseDetail;
  responseDetailCountList: ResponseDetail[] = [];

  rn: Reaction = new Reaction();

  user: User;
  value!: number;
  userId!:any;

  popOver: boolean = false;
  hideform: boolean = true;
  notallow: boolean = false;

  constructor(private template: TemplateService, private service: ResponsesummaryService) {
    this.region = new Region;

    this.user = new User;
    // this.comment = new Comment;
    this.myForm = new FormGroup({

      regionId: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      commentId: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      comments: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      surveyId: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
    });
    this.surveymodel = new Survey;
    this.comment = new Comment;
    this.reaction = new Reaction;
    this.responseDetail=new ResponseDetail;
    this.userId=sessionStorage.getItem("userId")||'';
    // this.userId=1;
    console.log("User:"+this.userId);
    this.getSurveyByUser(); 
    // this.getReponseDetailCount();
    this.getSurveyRegionUser();
    this.getReponseDetailCountUser();
      
  }

  // insertComment(data: any) {
  //   console.log(data.comments);
  //   this.comment.comments = data.comments;
  //   this.comment.surveyId = 2;
  //   this.comment.userId = 2;
  //   this.template.insertComment(this.comment).subscribe({

  //     next: (res: any) => {
  //       // this.router.navigate(['/create/builder']);
  //       alert("Successfully added");
  //     }, error: () => {
  //       alert("Survey Details Required");
  //     }
  //   });
  //   location.reload();
  // }

  getSurveyByUser() {
   
    this.user.userId = this.userId;
    console.log(this.user.userId);
    this.template.getSurveyByUser(this.user).subscribe(page => {
      this.userSurvey = page;
      console.log(this.userSurvey) 
    });
  }


  getSurveyRegionUser() {
    this.user.userId = this.userId;
    this.template.getSurveyRegionUser(this.user).subscribe(page => {
      this.otherSurvey = page;
      console.log(this.otherSurvey) 
    });
  }

  // getReponseDetailCount() {
  //   this.responseDetail.surveyId = this.surveyId;
  //   this.service.getResponseDetailCount(this.responseDetail).subscribe(res => {
  //     this.value = res;
  //     console.log(this.value)
  //   });
  // }

  viewpop(){
    this.hideform = false;
    this.popOver = true;
  }
 
  restrict() {
    this.hideform = false;
    this.notallow = true;
  }
  
  getReponseDetailCountUser() {
    this.user.userId = this.userId;
    this.service.getResponseDetailCountUser(this.user).subscribe(res => {
      this.responseDetailCountList = res;
      console.log(this.responseDetailCountList);
    });
 
 
  }
}  
