import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo18Component } from './lib60-demo18.component';

describe('Lib60Demo18Component', () => {
  let component: Lib60Demo18Component;
  let fixture: ComponentFixture<Lib60Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
