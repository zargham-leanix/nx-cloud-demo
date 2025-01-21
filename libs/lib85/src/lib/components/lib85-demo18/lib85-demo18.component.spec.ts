import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo18Component } from './lib85-demo18.component';

describe('Lib85Demo18Component', () => {
  let component: Lib85Demo18Component;
  let fixture: ComponentFixture<Lib85Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
