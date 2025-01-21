import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo18Component } from './lib11-demo18.component';

describe('Lib11Demo18Component', () => {
  let component: Lib11Demo18Component;
  let fixture: ComponentFixture<Lib11Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
