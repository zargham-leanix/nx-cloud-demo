import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo18Component } from './lib63-demo18.component';

describe('Lib63Demo18Component', () => {
  let component: Lib63Demo18Component;
  let fixture: ComponentFixture<Lib63Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
