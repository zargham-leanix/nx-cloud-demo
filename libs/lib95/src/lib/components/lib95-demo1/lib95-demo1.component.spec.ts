import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo1Component } from './lib95-demo1.component';

describe('Lib95Demo1Component', () => {
  let component: Lib95Demo1Component;
  let fixture: ComponentFixture<Lib95Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
