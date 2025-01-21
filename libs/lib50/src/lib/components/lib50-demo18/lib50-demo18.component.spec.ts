import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo18Component } from './lib50-demo18.component';

describe('Lib50Demo18Component', () => {
  let component: Lib50Demo18Component;
  let fixture: ComponentFixture<Lib50Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
