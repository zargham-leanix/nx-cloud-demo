import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo1Component } from './lib87-demo1.component';

describe('Lib87Demo1Component', () => {
  let component: Lib87Demo1Component;
  let fixture: ComponentFixture<Lib87Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
