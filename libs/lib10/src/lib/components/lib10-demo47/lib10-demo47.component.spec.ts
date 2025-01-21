import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo47Component } from './lib10-demo47.component';

describe('Lib10Demo47Component', () => {
  let component: Lib10Demo47Component;
  let fixture: ComponentFixture<Lib10Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
