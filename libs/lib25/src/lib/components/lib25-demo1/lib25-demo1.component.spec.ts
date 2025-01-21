import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo1Component } from './lib25-demo1.component';

describe('Lib25Demo1Component', () => {
  let component: Lib25Demo1Component;
  let fixture: ComponentFixture<Lib25Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
