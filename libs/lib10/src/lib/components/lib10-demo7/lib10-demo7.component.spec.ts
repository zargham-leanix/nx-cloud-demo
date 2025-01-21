import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo7Component } from './lib10-demo7.component';

describe('Lib10Demo7Component', () => {
  let component: Lib10Demo7Component;
  let fixture: ComponentFixture<Lib10Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
