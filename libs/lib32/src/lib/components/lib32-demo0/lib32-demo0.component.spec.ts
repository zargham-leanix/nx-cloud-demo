import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo0Component } from './lib32-demo0.component';

describe('Lib32Demo0Component', () => {
  let component: Lib32Demo0Component;
  let fixture: ComponentFixture<Lib32Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
