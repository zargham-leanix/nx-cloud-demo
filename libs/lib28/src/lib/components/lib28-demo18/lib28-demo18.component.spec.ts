import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo18Component } from './lib28-demo18.component';

describe('Lib28Demo18Component', () => {
  let component: Lib28Demo18Component;
  let fixture: ComponentFixture<Lib28Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
