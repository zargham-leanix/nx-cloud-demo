import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo7Component } from './lib32-demo7.component';

describe('Lib32Demo7Component', () => {
  let component: Lib32Demo7Component;
  let fixture: ComponentFixture<Lib32Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
