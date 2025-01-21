import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo18Component } from './lib48-demo18.component';

describe('Lib48Demo18Component', () => {
  let component: Lib48Demo18Component;
  let fixture: ComponentFixture<Lib48Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
