import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo18Component } from './lib32-demo18.component';

describe('Lib32Demo18Component', () => {
  let component: Lib32Demo18Component;
  let fixture: ComponentFixture<Lib32Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
