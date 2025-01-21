import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo37Component } from './lib66-demo37.component';

describe('Lib66Demo37Component', () => {
  let component: Lib66Demo37Component;
  let fixture: ComponentFixture<Lib66Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
