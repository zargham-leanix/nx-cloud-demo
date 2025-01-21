import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo18Component } from './lib80-demo18.component';

describe('Lib80Demo18Component', () => {
  let component: Lib80Demo18Component;
  let fixture: ComponentFixture<Lib80Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
