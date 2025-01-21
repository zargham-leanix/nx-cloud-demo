import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo1Component } from './lib99-demo1.component';

describe('Lib99Demo1Component', () => {
  let component: Lib99Demo1Component;
  let fixture: ComponentFixture<Lib99Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
