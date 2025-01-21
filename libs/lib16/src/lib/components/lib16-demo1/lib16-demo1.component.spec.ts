import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib16Demo1Component } from './lib16-demo1.component';

describe('Lib16Demo1Component', () => {
  let component: Lib16Demo1Component;
  let fixture: ComponentFixture<Lib16Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib16Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib16Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
