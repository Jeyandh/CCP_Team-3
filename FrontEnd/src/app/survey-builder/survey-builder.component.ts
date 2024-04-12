import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Page } from '../Survey-Model/page';
import { Question } from '../Survey-Model/question';
import { Option } from '../Survey-Model/option';
import { SurveybuilderService } from '../survey-service/surveybuilder.service';
import { SurveyQuestion } from '../Survey-Model/surveyquestion';
import { PageValue } from '../Survey-Model/PageValue';
import { QuestionValue } from '../Survey-Model/QuestionValue';
import { OptionValue } from '../Survey-Model/OptionValue';

@Component({
  selector: 'app-survey-builder',
  templateUrl: './survey-builder.component.html',
  styleUrls: ['./survey-builder.component.css']
})
export class SurveyBuilderComponent implements OnInit {

  myform!: FormGroup;
  newform!: FormGroup;
  // questionList: Question[] = [];
  totalNewQuestions = 0;
  surveyId:any=0;
  pagevalue: PageValue;
  pagevalueList: Page[] = [];
  questionValue: QuestionValue;
  questionValueList: QuestionValue[] = [];
  questionValueList1: QuestionValue[] = [];
  optionValue: OptionValue;

  optionValueList: OptionValue[] = [];
  optionValueList1: OptionValue[] = [];
  savePage: boolean = false;


  pages: Page[] = [];
  page:Page;
  totalNewPages = 0;
  i!:number;

  flag: boolean = true;
  flag1: boolean = true;
  open: boolean = false;
  close: boolean = true;

  addnewpage:any='false';
  sample:any;

  constructor(private fb: FormBuilder, private service: SurveybuilderService) {
    this.myform = this.fb.group({
      pageTitle: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      questions: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      optionType: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      pageNo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      questionNo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      // questionArray: this.fb.array([this.addQuestionGroup()],[Validators.required]),
      optionArray: this.fb.array([this.addOptionGroup()], [Validators.required])
      

    });
    // sessionStorage.setItem("flag",this.addnewpage);
    console.log(this.addnewpage);
    this.addnewpage=sessionStorage.getItem("flag") || "";
    console.log(this.addnewpage);
    this.page=new Page;
    this.pagevalue = new PageValue;
    this.questionValue = new QuestionValue;
    this.optionValue = new OptionValue;
    this.surveyId=sessionStorage.getItem("surveyId") || "";
    console.log(this.savePage);
  }

  submit(data: any) {
    console.log(this.newform.value);
  }
  resetPage() {
    // this.myform=new FormGroup({
    //   this.pageTitle='',
    //   questions:'',
    //   // optionArray:[],
    // });
  }

  private addOptionGroup(): FormGroup {
    return this.fb.group({
      options: [, Validators.required]
    });
  }

  // private addQuestionGroup(): FormGroup {
  //   return this.fb.group({
  //     questions: ['', Validators.required],
  //     optionArray:this.fb.array([this.addOptionGroup()],[Validators.required])
  //   });
  // }

  ngOnInit() {
    if (!localStorage.getItem('builder')) {
      localStorage.setItem('builder', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('builder')
    }
    console.log(this.savePage);
  }

  // ngOnInit(): void {
  //   this.myForm = this.fb.group({
  //     title: ['']
  //   });
  // }

  addNewPages(): void {
    if (this.totalNewPages < 3) {
      const newPage: Page = {
        pageId: this.pages.length + 1,
        pageNo: this.pages.length + 1,
        pageTitle: '',
        question: []
      };
      this.pages.push(newPage);
      this.totalNewPages++;
      this.flag1 = !this.flag1;
      this.flag = true;
      
    }
    // this.resetPage();\
    this.savePage = true;
    this.addnewpage=false;
    sessionStorage.setItem("flag",this.addnewpage);
    
    this.myform.reset();
    // this.flag1 = !this.flag1;

    

    // this.myform.reset();
    // this.myform.setControl([pageTitle]'');
    // this.myform.setValue({pageTitle:''});
  }

  // addNewQuestion(): void {
  //   if (this.totalNewQuestions <= 15) {
  //     const newQuestion: Question = {
  //       questionId: this.questions.length + 1,
  //       questionNo: this.questions.length + 1,
  //       questions: '',
  //       optionType: '',
  //       option: []
  //     };
  //     this.questions.push(newQuestion);
  //     this.totalNewQuestions++;
  //   }
  // }

  addNewQuestion(page: Page) {
    if (!page.question) {
      page.question = [];
    }
    if (page.question.length < 15) {
      page.question.push({
        questionId: page.question.length + 1, questionNo: page.question.length + 1,
        optionType: '',
        questions: '',
        option: [],
        pages: []
      });
    }
    this.flag = !this.flag;

    // this.myform=this.newform;
    // this.questionArray.push(this.addQuestionGroup());
  }

  // get questionArray(): FormArray {
  //   return <FormArray>this.myform.get('questionArray');
  // }

  //   get optionsList(){
  //     return (<FormArray>this.myform.get('optionArray')).controls
  // }

  addOption(question: Question): void {
    if (!question.option) {
      question.option = [];
    }
    if (question.option.length <= 10) {
      question.option.push({ optionId: question.option.length + 1, options: '' });
    }
    // const control= new FormControl([],[Validators.required]);
    // (<FormArray>this.myform.get('optionArray')).push(control);
    this.optionArray.push(this.addOptionGroup());
  }

  get optionArray(): FormArray {
    return <FormArray>this.myform.get('optionArray');
  }

  removePage(index: number): void {
    this.pages.splice(index, 1);
    this.totalNewPages--;
    this.flag1 = true;
  }

  removeQuestion(page: Page, index: number): void {
    page.question.splice(index, 1);
    this.flag = true;
  }

  // resetFields() {
  //   this.questions = '';
  //   this.questions
  //   this.answe = '';
  //   this.options = [];
  // }

  removeOption(question: Question, index: number): void {
    question.option.splice(index, 1);
  }

  insertValue(data: any) {

    // this.flag = !this.flag;
    this.open = true;
    


    // console.log(this.myform.value);
    // this.pagevalue.pageTitle=data.pageTitle;
    this.questionValue.questions = data.questions;
    // for(let i=0;i<this.optionArray.length-1;i++){
    //     console.log(this.optionArray);
    // }
    this.questionValue.optionType = data.optionType;
    this.questionValue.questionNo = data.questionNo;
    this.questionValue.pageNo = data.pageNo;
    if (this.savePage == true) {
      this.page.pageNo = data.pageNo;
      this.page.pageTitle = data.pageTitle;
      this.pagevalue.pageNo=data.pageNo;
      this.pagevalue.pageTitle=data.pageTitle;
      this.pagevalueList.push(this.page);
      this.page = new Page;
      console.log(this.pagevalueList);
      this.savePage = !this.savePage;
    }
    console.log(data.optionArray.length);
    for (let i = 0; i < data.optionArray.length; i++) {
      if (data.optionArray[i].options == null) {
        console.log("null");
      }
      else {
        this.optionValue.options = data.optionArray[i].options;
        this.optionValue.questionNo = data.questionNo;
        this.optionValue.pageNo = data.pageNo;
        this.optionValueList.push(this.optionValue);
        this.optionValueList1.push(this.optionValue);
        this.optionValue = new OptionValue;
      }
    }
    console.log(this.optionValueList);
    this.questionValue.option = this.optionValueList;
    this.optionValueList = [];


    // this.myform=new FormGroup<any>();
    this.questionValueList.push(this.questionValue);
    this.questionValueList1.push(this.questionValue);
    console.log(this.questionValueList);
    // this.questionValueList=[];
    this.questionValue = new QuestionValue;
    // this.optionArray=new O
    this.i=data.pageNo;
    this.pagevalue.surveyId = this.surveyId;
    this.pagevalue.question = this.questionValueList;

    console.log(this.pagevalue);
    // console.log(this.myform.value);
    this.myform = this.fb.group({
      questions: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      optionType: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      questionNo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      // questionArray: this.fb.array([this.addQuestionGroup()],[Validators.required]),
      optionArray: this.fb.array([this.addOptionGroup()], [Validators.required])


    });
    this.optionArray.push(this.addOptionGroup());
    this.savePage=false;
  }

  insertPage() {

    this.service.insertPages(this.pagevalue).subscribe({
      next: (res: any) => {
        // this.router.navigate(['/create/builder']);
        alert("Successfully created");
      }, error: () => {
        alert("Successfully created");
      }
    });
    console.log(this.pagevalue);
    this.questionValueList=[];
    this.myform = this.fb.group({
      pageTitle: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      questions: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      optionType: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      pageNo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      questionNo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z + 0-9]+')]),
      // questionArray: this.fb.array([this.addQuestionGroup()],[Validators.required]),
      optionArray: this.fb.array([this.addOptionGroup()], [Validators.required])
    });
    this.optionArray.push(this.addOptionGroup());
    this.savePage = true;
    // console.log(this.newform.value);
    // this.flag1 = !this.flag1;
    // this.close = false;
  }
}
