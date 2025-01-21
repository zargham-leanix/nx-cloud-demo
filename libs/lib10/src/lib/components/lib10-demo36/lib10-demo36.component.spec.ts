import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo36Component } from './lib10-demo36.component';

describe('Lib10Demo36Component', () => {
  let component: Lib10Demo36Component;
  let fixture: ComponentFixture<Lib10Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
