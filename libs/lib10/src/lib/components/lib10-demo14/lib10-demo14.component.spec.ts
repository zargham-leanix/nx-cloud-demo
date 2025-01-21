import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo14Component } from './lib10-demo14.component';

describe('Lib10Demo14Component', () => {
  let component: Lib10Demo14Component;
  let fixture: ComponentFixture<Lib10Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
