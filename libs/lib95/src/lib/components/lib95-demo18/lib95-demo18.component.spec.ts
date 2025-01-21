import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo18Component } from './lib95-demo18.component';

describe('Lib95Demo18Component', () => {
  let component: Lib95Demo18Component;
  let fixture: ComponentFixture<Lib95Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
