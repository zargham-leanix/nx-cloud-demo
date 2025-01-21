import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo1Component } from './lib50-demo1.component';

describe('Lib50Demo1Component', () => {
  let component: Lib50Demo1Component;
  let fixture: ComponentFixture<Lib50Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
