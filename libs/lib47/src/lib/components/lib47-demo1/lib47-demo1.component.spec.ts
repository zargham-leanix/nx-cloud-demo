import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo1Component } from './lib47-demo1.component';

describe('Lib47Demo1Component', () => {
  let component: Lib47Demo1Component;
  let fixture: ComponentFixture<Lib47Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
