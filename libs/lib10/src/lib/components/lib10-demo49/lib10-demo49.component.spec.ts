import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo49Component } from './lib10-demo49.component';

describe('Lib10Demo49Component', () => {
  let component: Lib10Demo49Component;
  let fixture: ComponentFixture<Lib10Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
