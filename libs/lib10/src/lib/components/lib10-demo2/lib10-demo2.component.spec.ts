import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo2Component } from './lib10-demo2.component';

describe('Lib10Demo2Component', () => {
  let component: Lib10Demo2Component;
  let fixture: ComponentFixture<Lib10Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
