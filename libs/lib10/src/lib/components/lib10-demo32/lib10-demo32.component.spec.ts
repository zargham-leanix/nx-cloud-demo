import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo32Component } from './lib10-demo32.component';

describe('Lib10Demo32Component', () => {
  let component: Lib10Demo32Component;
  let fixture: ComponentFixture<Lib10Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
