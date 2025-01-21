import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo18Component } from './lib4-demo18.component';

describe('Lib4Demo18Component', () => {
  let component: Lib4Demo18Component;
  let fixture: ComponentFixture<Lib4Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
