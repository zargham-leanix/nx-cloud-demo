import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo21Component } from './lib60-demo21.component';

describe('Lib60Demo21Component', () => {
  let component: Lib60Demo21Component;
  let fixture: ComponentFixture<Lib60Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
