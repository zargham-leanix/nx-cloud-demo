import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo11Component } from './lib10-demo11.component';

describe('Lib10Demo11Component', () => {
  let component: Lib10Demo11Component;
  let fixture: ComponentFixture<Lib10Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
