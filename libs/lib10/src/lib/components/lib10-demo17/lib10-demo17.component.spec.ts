import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo17Component } from './lib10-demo17.component';

describe('Lib10Demo17Component', () => {
  let component: Lib10Demo17Component;
  let fixture: ComponentFixture<Lib10Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
