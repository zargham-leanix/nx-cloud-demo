import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo18Component } from './lib100-demo18.component';

describe('Lib100Demo18Component', () => {
  let component: Lib100Demo18Component;
  let fixture: ComponentFixture<Lib100Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
