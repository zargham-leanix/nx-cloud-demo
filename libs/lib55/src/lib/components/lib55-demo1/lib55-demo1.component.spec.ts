import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo1Component } from './lib55-demo1.component';

describe('Lib55Demo1Component', () => {
  let component: Lib55Demo1Component;
  let fixture: ComponentFixture<Lib55Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
