import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo1Component } from './lib33-demo1.component';

describe('Lib33Demo1Component', () => {
  let component: Lib33Demo1Component;
  let fixture: ComponentFixture<Lib33Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
