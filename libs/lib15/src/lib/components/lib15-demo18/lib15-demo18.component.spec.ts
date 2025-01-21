import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo18Component } from './lib15-demo18.component';

describe('Lib15Demo18Component', () => {
  let component: Lib15Demo18Component;
  let fixture: ComponentFixture<Lib15Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
