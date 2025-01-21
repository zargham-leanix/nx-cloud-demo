import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo18Component } from './lib12-demo18.component';

describe('Lib12Demo18Component', () => {
  let component: Lib12Demo18Component;
  let fixture: ComponentFixture<Lib12Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
