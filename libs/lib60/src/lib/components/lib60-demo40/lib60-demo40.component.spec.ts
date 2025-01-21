import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo40Component } from './lib60-demo40.component';

describe('Lib60Demo40Component', () => {
  let component: Lib60Demo40Component;
  let fixture: ComponentFixture<Lib60Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
