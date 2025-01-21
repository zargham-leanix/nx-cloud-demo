import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo1Component } from './lib20-demo1.component';

describe('Lib20Demo1Component', () => {
  let component: Lib20Demo1Component;
  let fixture: ComponentFixture<Lib20Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
