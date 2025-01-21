import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo45Component } from './lib66-demo45.component';

describe('Lib66Demo45Component', () => {
  let component: Lib66Demo45Component;
  let fixture: ComponentFixture<Lib66Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
