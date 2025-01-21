import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo49Component } from './lib32-demo49.component';

describe('Lib32Demo49Component', () => {
  let component: Lib32Demo49Component;
  let fixture: ComponentFixture<Lib32Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
