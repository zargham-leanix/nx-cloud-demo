import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo40Component } from './lib10-demo40.component';

describe('Lib10Demo40Component', () => {
  let component: Lib10Demo40Component;
  let fixture: ComponentFixture<Lib10Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
