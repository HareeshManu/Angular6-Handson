import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-servicetest',
  template: `
    <h2>Service</h2>
    <h2>{{errorMessage}}</h2>
    <ul *ngFor="let emp of employess">
      <li>{{emp.name}}</li>
    </ul>
  `,
  styleUrls: ['./servicetest.component.css']
})
export class ServicetestComponent implements OnInit {

  public employess = [];
  public errorMessage ;
  constructor(private _empService : EmployeeService) { }

  // ngOnInit() {
  //   this.employess = this._empService.getEmployess();
  // }
  ngOnInit() {
     this._empService.getEmployess()
     .subscribe(data => this.employess = data,
                error =>this.errorMessage = error);
  }

}
