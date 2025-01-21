import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo21Component } from './lib10-demo21.component';

describe('Lib10Demo21Component', () => {
  let component: Lib10Demo21Component;
  let fixture: ComponentFixture<Lib10Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
