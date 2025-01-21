import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo1Component } from './lib88-demo1.component';

describe('Lib88Demo1Component', () => {
  let component: Lib88Demo1Component;
  let fixture: ComponentFixture<Lib88Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
