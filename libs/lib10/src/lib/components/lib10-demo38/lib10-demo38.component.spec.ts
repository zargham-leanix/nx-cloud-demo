import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo38Component } from './lib10-demo38.component';

describe('Lib10Demo38Component', () => {
  let component: Lib10Demo38Component;
  let fixture: ComponentFixture<Lib10Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
