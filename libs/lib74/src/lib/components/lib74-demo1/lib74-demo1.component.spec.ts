import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo1Component } from './lib74-demo1.component';

describe('Lib74Demo1Component', () => {
  let component: Lib74Demo1Component;
  let fixture: ComponentFixture<Lib74Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
