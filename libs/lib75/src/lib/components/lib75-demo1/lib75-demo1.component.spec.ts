import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo1Component } from './lib75-demo1.component';

describe('Lib75Demo1Component', () => {
  let component: Lib75Demo1Component;
  let fixture: ComponentFixture<Lib75Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
