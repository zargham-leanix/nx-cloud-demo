import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo38Component } from './lib60-demo38.component';

describe('Lib60Demo38Component', () => {
  let component: Lib60Demo38Component;
  let fixture: ComponentFixture<Lib60Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
