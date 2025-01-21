import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo33Component } from './lib60-demo33.component';

describe('Lib60Demo33Component', () => {
  let component: Lib60Demo33Component;
  let fixture: ComponentFixture<Lib60Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
