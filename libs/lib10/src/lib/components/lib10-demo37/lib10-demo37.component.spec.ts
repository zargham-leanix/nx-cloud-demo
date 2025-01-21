import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo37Component } from './lib10-demo37.component';

describe('Lib10Demo37Component', () => {
  let component: Lib10Demo37Component;
  let fixture: ComponentFixture<Lib10Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
