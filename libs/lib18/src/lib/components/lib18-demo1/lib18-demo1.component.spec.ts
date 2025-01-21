import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo1Component } from './lib18-demo1.component';

describe('Lib18Demo1Component', () => {
  let component: Lib18Demo1Component;
  let fixture: ComponentFixture<Lib18Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
