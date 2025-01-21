import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo18Component } from './lib29-demo18.component';

describe('Lib29Demo18Component', () => {
  let component: Lib29Demo18Component;
  let fixture: ComponentFixture<Lib29Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
