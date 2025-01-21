import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo20Component } from './lib10-demo20.component';

describe('Lib10Demo20Component', () => {
  let component: Lib10Demo20Component;
  let fixture: ComponentFixture<Lib10Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
