import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo1Component } from './lib48-demo1.component';

describe('Lib48Demo1Component', () => {
  let component: Lib48Demo1Component;
  let fixture: ComponentFixture<Lib48Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
