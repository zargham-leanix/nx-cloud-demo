import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo36Component } from './lib32-demo36.component';

describe('Lib32Demo36Component', () => {
  let component: Lib32Demo36Component;
  let fixture: ComponentFixture<Lib32Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
