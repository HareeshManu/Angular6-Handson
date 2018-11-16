import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipescompComponent } from './pipescomp.component';

describe('PipescompComponent', () => {
  let component: PipescompComponent;
  let fixture: ComponentFixture<PipescompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipescompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
