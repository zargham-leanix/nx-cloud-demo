import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo18Component } from './lib55-demo18.component';

describe('Lib55Demo18Component', () => {
  let component: Lib55Demo18Component;
  let fixture: ComponentFixture<Lib55Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
