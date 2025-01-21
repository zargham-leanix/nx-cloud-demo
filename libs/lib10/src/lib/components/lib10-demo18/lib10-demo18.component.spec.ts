import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo18Component } from './lib10-demo18.component';

describe('Lib10Demo18Component', () => {
  let component: Lib10Demo18Component;
  let fixture: ComponentFixture<Lib10Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
