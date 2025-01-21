import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo33Component } from './lib10-demo33.component';

describe('Lib10Demo33Component', () => {
  let component: Lib10Demo33Component;
  let fixture: ComponentFixture<Lib10Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
