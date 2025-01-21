import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo1Component } from './lib80-demo1.component';

describe('Lib80Demo1Component', () => {
  let component: Lib80Demo1Component;
  let fixture: ComponentFixture<Lib80Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
