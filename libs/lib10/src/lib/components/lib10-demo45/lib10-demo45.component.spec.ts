import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo45Component } from './lib10-demo45.component';

describe('Lib10Demo45Component', () => {
  let component: Lib10Demo45Component;
  let fixture: ComponentFixture<Lib10Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
