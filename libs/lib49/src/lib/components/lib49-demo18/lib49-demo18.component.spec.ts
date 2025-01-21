import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo18Component } from './lib49-demo18.component';

describe('Lib49Demo18Component', () => {
  let component: Lib49Demo18Component;
  let fixture: ComponentFixture<Lib49Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
