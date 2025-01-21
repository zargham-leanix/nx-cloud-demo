import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo1Component } from './lib68-demo1.component';

describe('Lib68Demo1Component', () => {
  let component: Lib68Demo1Component;
  let fixture: ComponentFixture<Lib68Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
