import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent {
  constructor(private router:Router){

  }

  goToDashBoard()
  {
    this.router.navigate(['/Admin']);
  }

}
