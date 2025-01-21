import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo18Component } from './lib58-demo18.component';

describe('Lib58Demo18Component', () => {
  let component: Lib58Demo18Component;
  let fixture: ComponentFixture<Lib58Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
