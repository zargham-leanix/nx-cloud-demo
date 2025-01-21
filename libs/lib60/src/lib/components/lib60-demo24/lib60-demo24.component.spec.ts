import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo24Component } from './lib60-demo24.component';

describe('Lib60Demo24Component', () => {
  let component: Lib60Demo24Component;
  let fixture: ComponentFixture<Lib60Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
