import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo38Component } from './lib66-demo38.component';

describe('Lib66Demo38Component', () => {
  let component: Lib66Demo38Component;
  let fixture: ComponentFixture<Lib66Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
