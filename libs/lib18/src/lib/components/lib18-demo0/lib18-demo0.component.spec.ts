import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo0Component } from './lib18-demo0.component';

describe('Lib18Demo0Component', () => {
  let component: Lib18Demo0Component;
  let fixture: ComponentFixture<Lib18Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
