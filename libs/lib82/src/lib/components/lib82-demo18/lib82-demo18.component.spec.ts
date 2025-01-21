import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo18Component } from './lib82-demo18.component';

describe('Lib82Demo18Component', () => {
  let component: Lib82Demo18Component;
  let fixture: ComponentFixture<Lib82Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
