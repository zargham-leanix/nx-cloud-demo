import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo1Component } from './lib58-demo1.component';

describe('Lib58Demo1Component', () => {
  let component: Lib58Demo1Component;
  let fixture: ComponentFixture<Lib58Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
