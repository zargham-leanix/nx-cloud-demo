import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo38Component } from './lib99-demo38.component';

describe('Lib99Demo38Component', () => {
  let component: Lib99Demo38Component;
  let fixture: ComponentFixture<Lib99Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
