import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h2>
              {{"welcome" +name}}
             </h2><br>
             <h2>{{name.length}}</h2><br>
             <h2>{{name.toUpperCase()}}</h2>
             <h2>{{4+9}}</h2>
             <h2>{{greetMethod()}}</h2>
             <h2>{{sitUrl}}</h2> 
             <input [id]="myId" type=text value="Manu">
             <input class="text-success" [disabled]="isDisabled" id="{{myId}}" type=text value="Manu">
             <input bind-disabled="true" id="{{myId}}" type=text value="Manu">
             <h2 [class]="successClass">CSS Class Property</h2>
             <h2 [class.text-fails]="isError">Class Property</h2>

             <h2 [ngClass]="messageClassObj">NgClasss sample</h2>

             <h2 [style.color]="hasError ? 'red' : 'green'">Style binding</h2>
             <h2 [style.color]="successClass2">Style binding2</h2>
             <h2 [ngStyle]="styleInline">Style binding2</h2>
              <br>
             <h3>Event Binding Sample<h3>
             <button (click)="clicked($event)">Click Please</button>
             <button (click)="greetings='Welcome Angualar6'">Click Please</button>
             {{greetings}}<br>
             <h3>Template Reference</h3>
             <input #myInput type="text">
             <button (click)="logData(myInput)">Please add</button><br>

             <h3>Two way Binding(ngModel)</h3>
             <input [(ngModel)]="name" type="text">
             {{name}}
             `,
  styles: [`
  div{
    color:red;
  }
  .text-success{
    color:green;
  }
  .text-fails{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  //Cannot access global js in template directly for ex-:window.location.href;
  public name ="Gayyuuu";
  public sitUrl =window.location.href;
  public myId ="testId";
  public isDisabled =false;
  public greetings ='';
  //Class property
  public successClass="text-success";
  public isError=true;

  //NgClass
  public hasError=true;
  public isSpecial=true;
  public messageClassObj={
    "text-success":!this.hasError,
    "text-fails" : this.hasError,
    "text-special" :this.isSpecial
  }
  //Inline Style n NgStyle
  public successClass2="green";
  public styleInline={
    color:"blue",
    fontStyle:"italic"
  }

  //Event Binding
  clicked(event){
    console.log('Clickeddd'+event);
    this.greetings='You Clicked'+event.type;
    
  }

  //Template Reference
  logData(myInput){
    console.log('Your Input '+myInput.value);
  }
  constructor() { }

  ngOnInit() {
  }
  greetMethod(){
    return "welcomeee" + this.name;
  }

}
