import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipescomp',
  template: `
  <h3>String pipes</h3>
      {{name | lowercase}} <br>
      {{name | uppercase}}<br>
      {{message | titlecase}}<br>
      {{name | slice:3:6}}<br/>
      {{name | slice:3}}<br/>
      {{person | json}}
      <h3>Number Pipes</h3>
      <h2>{{5.678 | number:'1.2-3'}}</h2>
      <h2>{{5.678 | number:'3.4-5'}}</h2>
      <h2>{{5.678 | number:'3.1-2'}}</h2>
      <h2>{{date}}</h2>
      <h2>{{date | date:'short'}}</h2>

  `,
  styleUrls: ['./pipescomp.component.css']
})
export class PipescompComponent implements OnInit {

  constructor() { }
  public name ="carrentals";
  public message = "Welcome To carrentals";
  public person = {
    "name" : "Gayathri",
    "nickname" : "Gayu"
  }
  public date = new Date();

  ngOnInit() {
  }

}
