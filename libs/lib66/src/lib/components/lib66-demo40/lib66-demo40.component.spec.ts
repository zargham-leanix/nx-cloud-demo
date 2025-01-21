import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo40Component } from './lib66-demo40.component';

describe('Lib66Demo40Component', () => {
  let component: Lib66Demo40Component;
  let fixture: ComponentFixture<Lib66Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
