import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo47Component } from './lib60-demo47.component';

describe('Lib60Demo47Component', () => {
  let component: Lib60Demo47Component;
  let fixture: ComponentFixture<Lib60Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
