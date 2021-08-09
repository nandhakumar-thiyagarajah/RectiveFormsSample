import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import {employeeInter} from './employeeInter';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm : FormGroup;
  emplyeeList : employeeInter[] = [];

  constructor(private fb:FormBuilder) {

    this.employeeForm = this.fb.group({
      empId:new FormControl(),
      empName:new FormControl(),
      empPosition : new FormControl(),
      empSalary : new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  createList(){
    // window.alert(JSON.stringify(this.employeeForm.value));

    this.emplyeeList.push(this.employeeForm.value);
    this.employeeForm.reset();
    console.log("employeeList : "+JSON.stringify(this.emplyeeList))
  }

}
