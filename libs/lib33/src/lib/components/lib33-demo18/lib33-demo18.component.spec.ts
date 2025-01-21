import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo18Component } from './lib33-demo18.component';

describe('Lib33Demo18Component', () => {
  let component: Lib33Demo18Component;
  let fixture: ComponentFixture<Lib33Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
