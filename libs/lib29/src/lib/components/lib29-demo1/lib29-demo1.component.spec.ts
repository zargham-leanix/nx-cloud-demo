import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo1Component } from './lib29-demo1.component';

describe('Lib29Demo1Component', () => {
  let component: Lib29Demo1Component;
  let fixture: ComponentFixture<Lib29Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
