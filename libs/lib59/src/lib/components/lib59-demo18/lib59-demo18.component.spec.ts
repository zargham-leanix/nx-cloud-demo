import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo18Component } from './lib59-demo18.component';

describe('Lib59Demo18Component', () => {
  let component: Lib59Demo18Component;
  let fixture: ComponentFixture<Lib59Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
