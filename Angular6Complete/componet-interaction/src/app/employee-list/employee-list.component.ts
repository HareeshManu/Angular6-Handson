import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-employee-list',
  template: `<h2>ServiceList</h2>
  <h2>{{errorMessage}}</h2>
  <ul *ngFor="let emp of employess">
    <li>{{emp.name}} - {{emp.id}} - {{emp.age}}</li>
  </ul>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employess = [];
  public errorMessage ;
  constructor(private _empService:EmployeeService) { }
  ngOnInit() {
    this._empService.getEmployess()
    .subscribe(data => this.employess = data,
                error =>this.errorMessage = error);
 }
}
