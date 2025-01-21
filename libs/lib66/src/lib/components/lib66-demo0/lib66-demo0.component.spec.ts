import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo0Component } from './lib66-demo0.component';

describe('Lib66Demo0Component', () => {
  let component: Lib66Demo0Component;
  let fixture: ComponentFixture<Lib66Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
