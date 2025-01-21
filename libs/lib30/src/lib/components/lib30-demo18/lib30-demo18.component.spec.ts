import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo18Component } from './lib30-demo18.component';

describe('Lib30Demo18Component', () => {
  let component: Lib30Demo18Component;
  let fixture: ComponentFixture<Lib30Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
