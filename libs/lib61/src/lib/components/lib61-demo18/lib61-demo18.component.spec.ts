import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo18Component } from './lib61-demo18.component';

describe('Lib61Demo18Component', () => {
  let component: Lib61Demo18Component;
  let fixture: ComponentFixture<Lib61Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
