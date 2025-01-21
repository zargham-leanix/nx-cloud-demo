import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo1Component } from './lib52-demo1.component';

describe('Lib52Demo1Component', () => {
  let component: Lib52Demo1Component;
  let fixture: ComponentFixture<Lib52Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
