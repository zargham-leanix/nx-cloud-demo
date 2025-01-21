import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo1Component } from './lib11-demo1.component';

describe('Lib11Demo1Component', () => {
  let component: Lib11Demo1Component;
  let fixture: ComponentFixture<Lib11Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
