import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo45Component } from './lib32-demo45.component';

describe('Lib32Demo45Component', () => {
  let component: Lib32Demo45Component;
  let fixture: ComponentFixture<Lib32Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
