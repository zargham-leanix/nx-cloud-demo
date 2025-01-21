import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo18Component } from './lib81-demo18.component';

describe('Lib81Demo18Component', () => {
  let component: Lib81Demo18Component;
  let fixture: ComponentFixture<Lib81Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
