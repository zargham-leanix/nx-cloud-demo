import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo18Component } from './lib74-demo18.component';

describe('Lib74Demo18Component', () => {
  let component: Lib74Demo18Component;
  let fixture: ComponentFixture<Lib74Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
