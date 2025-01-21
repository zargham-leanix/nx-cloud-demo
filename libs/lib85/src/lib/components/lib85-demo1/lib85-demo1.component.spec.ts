import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo1Component } from './lib85-demo1.component';

describe('Lib85Demo1Component', () => {
  let component: Lib85Demo1Component;
  let fixture: ComponentFixture<Lib85Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
