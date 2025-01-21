import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo18Component } from './lib52-demo18.component';

describe('Lib52Demo18Component', () => {
  let component: Lib52Demo18Component;
  let fixture: ComponentFixture<Lib52Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
