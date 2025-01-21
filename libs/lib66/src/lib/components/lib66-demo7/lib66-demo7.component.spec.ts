import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo7Component } from './lib66-demo7.component';

describe('Lib66Demo7Component', () => {
  let component: Lib66Demo7Component;
  let fixture: ComponentFixture<Lib66Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
