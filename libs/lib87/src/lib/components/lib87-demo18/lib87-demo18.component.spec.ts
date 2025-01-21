import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo18Component } from './lib87-demo18.component';

describe('Lib87Demo18Component', () => {
  let component: Lib87Demo18Component;
  let fixture: ComponentFixture<Lib87Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
