import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo1Component } from './lib8-demo1.component';

describe('Lib8Demo1Component', () => {
  let component: Lib8Demo1Component;
  let fixture: ComponentFixture<Lib8Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
