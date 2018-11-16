import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
   <h3>Department with id = {{departmentId}}</h3>
   <a (click)="goPrevious()">Previous</a>
   <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router :Router) { }
  public departmentId;
  ngOnInit() {
    // let id =parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params :ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
}
  goPrevious(){
   let previousId = this.departmentId - 1;
   this.router.navigate(['/department',previousId]);
  }
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department',nextId]);
  }
 

}
