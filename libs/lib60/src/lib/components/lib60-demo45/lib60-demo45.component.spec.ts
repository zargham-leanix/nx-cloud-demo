import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo45Component } from './lib60-demo45.component';

describe('Lib60Demo45Component', () => {
  let component: Lib60Demo45Component;
  let fixture: ComponentFixture<Lib60Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
