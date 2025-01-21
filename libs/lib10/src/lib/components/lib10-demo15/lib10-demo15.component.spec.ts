import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo15Component } from './lib10-demo15.component';

describe('Lib10Demo15Component', () => {
  let component: Lib10Demo15Component;
  let fixture: ComponentFixture<Lib10Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
