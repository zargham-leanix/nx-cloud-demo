import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo18Component } from './lib88-demo18.component';

describe('Lib88Demo18Component', () => {
  let component: Lib88Demo18Component;
  let fixture: ComponentFixture<Lib88Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
