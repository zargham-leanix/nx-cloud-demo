import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo20Component } from './lib60-demo20.component';

describe('Lib60Demo20Component', () => {
  let component: Lib60Demo20Component;
  let fixture: ComponentFixture<Lib60Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
