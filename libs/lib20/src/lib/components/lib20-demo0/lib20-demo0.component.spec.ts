import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo0Component } from './lib20-demo0.component';

describe('Lib20Demo0Component', () => {
  let component: Lib20Demo0Component;
  let fixture: ComponentFixture<Lib20Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
