import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo0Component } from './lib60-demo0.component';

describe('Lib60Demo0Component', () => {
  let component: Lib60Demo0Component;
  let fixture: ComponentFixture<Lib60Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
