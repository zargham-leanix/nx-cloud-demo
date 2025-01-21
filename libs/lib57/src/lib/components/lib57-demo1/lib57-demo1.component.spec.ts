import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo1Component } from './lib57-demo1.component';

describe('Lib57Demo1Component', () => {
  let component: Lib57Demo1Component;
  let fixture: ComponentFixture<Lib57Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
