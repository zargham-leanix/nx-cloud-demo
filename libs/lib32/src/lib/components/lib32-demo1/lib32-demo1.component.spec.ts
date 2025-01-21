import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo1Component } from './lib32-demo1.component';

describe('Lib32Demo1Component', () => {
  let component: Lib32Demo1Component;
  let fixture: ComponentFixture<Lib32Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
