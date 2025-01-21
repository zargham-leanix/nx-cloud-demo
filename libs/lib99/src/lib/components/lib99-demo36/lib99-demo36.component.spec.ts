import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo36Component } from './lib99-demo36.component';

describe('Lib99Demo36Component', () => {
  let component: Lib99Demo36Component;
  let fixture: ComponentFixture<Lib99Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
