import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo18Component } from './lib66-demo18.component';

describe('Lib66Demo18Component', () => {
  let component: Lib66Demo18Component;
  let fixture: ComponentFixture<Lib66Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
