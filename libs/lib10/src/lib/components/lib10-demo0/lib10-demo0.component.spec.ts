import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo0Component } from './lib10-demo0.component';

describe('Lib10Demo0Component', () => {
  let component: Lib10Demo0Component;
  let fixture: ComponentFixture<Lib10Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
