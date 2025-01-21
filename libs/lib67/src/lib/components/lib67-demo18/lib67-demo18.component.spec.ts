import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo18Component } from './lib67-demo18.component';

describe('Lib67Demo18Component', () => {
  let component: Lib67Demo18Component;
  let fixture: ComponentFixture<Lib67Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
