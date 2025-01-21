import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo49Component } from './lib66-demo49.component';

describe('Lib66Demo49Component', () => {
  let component: Lib66Demo49Component;
  let fixture: ComponentFixture<Lib66Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
