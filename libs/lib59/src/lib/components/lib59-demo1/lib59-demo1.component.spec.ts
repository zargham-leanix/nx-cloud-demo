import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo1Component } from './lib59-demo1.component';

describe('Lib59Demo1Component', () => {
  let component: Lib59Demo1Component;
  let fixture: ComponentFixture<Lib59Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
