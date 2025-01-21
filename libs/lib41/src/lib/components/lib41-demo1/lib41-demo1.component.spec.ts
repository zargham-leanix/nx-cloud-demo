import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo1Component } from './lib41-demo1.component';

describe('Lib41Demo1Component', () => {
  let component: Lib41Demo1Component;
  let fixture: ComponentFixture<Lib41Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
