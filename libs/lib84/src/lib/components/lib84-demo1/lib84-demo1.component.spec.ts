import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo1Component } from './lib84-demo1.component';

describe('Lib84Demo1Component', () => {
  let component: Lib84Demo1Component;
  let fixture: ComponentFixture<Lib84Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
