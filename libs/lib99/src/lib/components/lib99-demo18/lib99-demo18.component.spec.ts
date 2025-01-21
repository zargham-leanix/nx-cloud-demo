import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo18Component } from './lib99-demo18.component';

describe('Lib99Demo18Component', () => {
  let component: Lib99Demo18Component;
  let fixture: ComponentFixture<Lib99Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
