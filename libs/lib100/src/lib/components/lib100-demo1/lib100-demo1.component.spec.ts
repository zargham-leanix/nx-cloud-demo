import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo1Component } from './lib100-demo1.component';

describe('Lib100Demo1Component', () => {
  let component: Lib100Demo1Component;
  let fixture: ComponentFixture<Lib100Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
