import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo1Component } from './lib10-demo1.component';

describe('Lib10Demo1Component', () => {
  let component: Lib10Demo1Component;
  let fixture: ComponentFixture<Lib10Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
