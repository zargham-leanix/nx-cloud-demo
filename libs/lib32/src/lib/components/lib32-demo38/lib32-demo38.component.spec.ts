import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo38Component } from './lib32-demo38.component';

describe('Lib32Demo38Component', () => {
  let component: Lib32Demo38Component;
  let fixture: ComponentFixture<Lib32Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
