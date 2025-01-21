import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo1Component } from './lib66-demo1.component';

describe('Lib66Demo1Component', () => {
  let component: Lib66Demo1Component;
  let fixture: ComponentFixture<Lib66Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
