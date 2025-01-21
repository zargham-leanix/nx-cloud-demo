import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo36Component } from './lib60-demo36.component';

describe('Lib60Demo36Component', () => {
  let component: Lib60Demo36Component;
  let fixture: ComponentFixture<Lib60Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
