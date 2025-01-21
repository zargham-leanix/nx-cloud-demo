import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo18Component } from './lib20-demo18.component';

describe('Lib20Demo18Component', () => {
  let component: Lib20Demo18Component;
  let fixture: ComponentFixture<Lib20Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
