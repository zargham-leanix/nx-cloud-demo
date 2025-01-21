import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo18Component } from './lib57-demo18.component';

describe('Lib57Demo18Component', () => {
  let component: Lib57Demo18Component;
  let fixture: ComponentFixture<Lib57Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
