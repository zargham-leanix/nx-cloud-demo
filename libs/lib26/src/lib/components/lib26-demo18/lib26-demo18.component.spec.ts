import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo18Component } from './lib26-demo18.component';

describe('Lib26Demo18Component', () => {
  let component: Lib26Demo18Component;
  let fixture: ComponentFixture<Lib26Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
