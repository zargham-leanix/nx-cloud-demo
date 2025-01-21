import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo1Component } from './lib44-demo1.component';

describe('Lib44Demo1Component', () => {
  let component: Lib44Demo1Component;
  let fixture: ComponentFixture<Lib44Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
