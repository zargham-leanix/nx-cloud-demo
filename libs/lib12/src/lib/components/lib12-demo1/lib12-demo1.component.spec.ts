import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo1Component } from './lib12-demo1.component';

describe('Lib12Demo1Component', () => {
  let component: Lib12Demo1Component;
  let fixture: ComponentFixture<Lib12Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
