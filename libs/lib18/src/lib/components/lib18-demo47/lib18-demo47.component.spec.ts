import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo47Component } from './lib18-demo47.component';

describe('Lib18Demo47Component', () => {
  let component: Lib18Demo47Component;
  let fixture: ComponentFixture<Lib18Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
