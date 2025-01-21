import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo20Component } from './lib75-demo20.component';

describe('Lib75Demo20Component', () => {
  let component: Lib75Demo20Component;
  let fixture: ComponentFixture<Lib75Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
