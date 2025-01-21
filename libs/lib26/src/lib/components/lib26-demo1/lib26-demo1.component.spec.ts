import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo1Component } from './lib26-demo1.component';

describe('Lib26Demo1Component', () => {
  let component: Lib26Demo1Component;
  let fixture: ComponentFixture<Lib26Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
