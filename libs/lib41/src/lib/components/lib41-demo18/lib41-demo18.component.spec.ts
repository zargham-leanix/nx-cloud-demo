import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo18Component } from './lib41-demo18.component';

describe('Lib41Demo18Component', () => {
  let component: Lib41Demo18Component;
  let fixture: ComponentFixture<Lib41Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
