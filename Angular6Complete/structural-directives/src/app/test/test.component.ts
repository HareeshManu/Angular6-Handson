import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h2 *ngIf="displayname ; else elseBlock">
      Hi StructuralIf
  </h2>
  <ng-template #elseBlock>
    <h2>
    Nmae is Hiden
    </h2>
  </ng-template>
  <h2>If then Else</h2>

  <div *ngIf="displayname ; then thenBlock ; else elseCase"></div>
<ng-template #thenBlock>
<h2>
Nmae is there
</h2>
</ng-template>
<ng-template #elseCase>
<h2>
Nmae is Hiden
</h2>
</ng-template>

<h2>ngSwitch</h2>
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You picked red</div>
  <div *ngSwitchCase="'blue'">You picked blue</div>
  <div *ngSwitchDefault>Pick Again</div>
</div>
<h2>ngForDirective</h2>
<div *ngFor="let color of colors ; index as i">
<h3>{{i}} - {{color}}</h3>
</div>
<div *ngFor="let color of colors ; first as f">
<h3>{{f}} - {{color}}</h3>
</div>
<div *ngFor="let color of colors ; odd as o">
<h3>{{o}} - {{color}}</h3>
</div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  displayname = true;
  public color = "a";
  public colors = ['red','blue','green'];
  constructor() { }

  ngOnInit() {
  }

}
