import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo18Component } from './lib75-demo18.component';

describe('Lib75Demo18Component', () => {
  let component: Lib75Demo18Component;
  let fixture: ComponentFixture<Lib75Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
