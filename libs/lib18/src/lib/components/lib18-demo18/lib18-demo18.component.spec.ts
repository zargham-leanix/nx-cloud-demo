import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo18Component } from './lib18-demo18.component';

describe('Lib18Demo18Component', () => {
  let component: Lib18Demo18Component;
  let fixture: ComponentFixture<Lib18Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
