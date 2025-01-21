import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo18Component } from './lib25-demo18.component';

describe('Lib25Demo18Component', () => {
  let component: Lib25Demo18Component;
  let fixture: ComponentFixture<Lib25Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
