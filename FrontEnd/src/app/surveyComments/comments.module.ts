import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyCommentComponent } from './components/surveyComment/comment.component';
import { CommentFormComponent } from './components/surveyCommentForm/commentForm.component';
import { SurveyCommentsComponent } from './comments.component';
import { SurveyCommentsService } from './surveyComment-services/survey-comments.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SurveyCommentsComponent, SurveyCommentComponent, CommentFormComponent],
  providers: [SurveyCommentsService],
  exports: [SurveyCommentsComponent,SurveyCommentComponent,CommentFormComponent],
})
export class SurveyCommentsModule {}
