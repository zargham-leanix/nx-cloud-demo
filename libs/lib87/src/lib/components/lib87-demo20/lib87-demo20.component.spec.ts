import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo20Component } from './lib87-demo20.component';

describe('Lib87Demo20Component', () => {
  let component: Lib87Demo20Component;
  let fixture: ComponentFixture<Lib87Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
