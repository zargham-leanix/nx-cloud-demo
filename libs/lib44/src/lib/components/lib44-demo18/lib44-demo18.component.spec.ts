import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo18Component } from './lib44-demo18.component';

describe('Lib44Demo18Component', () => {
  let component: Lib44Demo18Component;
  let fixture: ComponentFixture<Lib44Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
