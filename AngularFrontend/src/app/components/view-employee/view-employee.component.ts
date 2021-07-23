import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  show:boolean =false;
  employees: Object;

  constructor(private service:EmployeesService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.service.getAllEmployees().subscribe(data => {
      this.employees=data;
      this.show=true;
    })
  }

}
