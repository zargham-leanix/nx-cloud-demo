import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo18Component } from './lib46-demo18.component';

describe('Lib46Demo18Component', () => {
  let component: Lib46Demo18Component;
  let fixture: ComponentFixture<Lib46Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
