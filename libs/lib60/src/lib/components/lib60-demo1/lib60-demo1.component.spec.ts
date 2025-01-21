import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo1Component } from './lib60-demo1.component';

describe('Lib60Demo1Component', () => {
  let component: Lib60Demo1Component;
  let fixture: ComponentFixture<Lib60Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
