import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo1Component } from './lib81-demo1.component';

describe('Lib81Demo1Component', () => {
  let component: Lib81Demo1Component;
  let fixture: ComponentFixture<Lib81Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
