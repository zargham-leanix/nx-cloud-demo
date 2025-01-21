import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo16Component } from './lib10-demo16.component';

describe('Lib10Demo16Component', () => {
  let component: Lib10Demo16Component;
  let fixture: ComponentFixture<Lib10Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
