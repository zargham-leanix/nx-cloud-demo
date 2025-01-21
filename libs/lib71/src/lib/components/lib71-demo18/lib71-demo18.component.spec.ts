import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo18Component } from './lib71-demo18.component';

describe('Lib71Demo18Component', () => {
  let component: Lib71Demo18Component;
  let fixture: ComponentFixture<Lib71Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
