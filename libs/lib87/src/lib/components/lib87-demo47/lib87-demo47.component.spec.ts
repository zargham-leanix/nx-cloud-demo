import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo47Component } from './lib87-demo47.component';

describe('Lib87Demo47Component', () => {
  let component: Lib87Demo47Component;
  let fixture: ComponentFixture<Lib87Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
