import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  frm = new FormGroup({
    FirstName:new FormControl('FirstName'),
    LastName:new FormControl('LastName'),
    PhoneNumber:new FormControl('PhoneNumber')

  })
  constructor(private service: EmployeesService) { }

  ngOnInit() {
  }
  submitEmployee(e){
    e.preventDefault();
    let params = {
      FirstName :this.frm.get('FirstName').value,
      LastName :this.frm.get('LastName').value,
      PhoneNumber :this.frm.get('PhoneNumber').value
    };
    this.service.postData(params).subscribe(response=>{
      console.log(response);
    })
  }

}
