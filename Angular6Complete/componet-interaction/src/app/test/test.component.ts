import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` 
  <h2>{{"Hello "+ name}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  @Input('parentData') public name ;
  @Output() public childEvent = new EventEmitter();
  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hello World');
  }
}
