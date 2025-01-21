import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo1Component } from './lib73-demo1.component';

describe('Lib73Demo1Component', () => {
  let component: Lib73Demo1Component;
  let fixture: ComponentFixture<Lib73Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
