import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo18Component } from './lib47-demo18.component';

describe('Lib47Demo18Component', () => {
  let component: Lib47Demo18Component;
  let fixture: ComponentFixture<Lib47Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
