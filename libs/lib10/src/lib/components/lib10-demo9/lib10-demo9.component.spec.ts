import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo9Component } from './lib10-demo9.component';

describe('Lib10Demo9Component', () => {
  let component: Lib10Demo9Component;
  let fixture: ComponentFixture<Lib10Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
