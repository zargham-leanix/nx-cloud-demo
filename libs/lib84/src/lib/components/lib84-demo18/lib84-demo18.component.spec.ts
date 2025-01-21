import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo18Component } from './lib84-demo18.component';

describe('Lib84Demo18Component', () => {
  let component: Lib84Demo18Component;
  let fixture: ComponentFixture<Lib84Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
