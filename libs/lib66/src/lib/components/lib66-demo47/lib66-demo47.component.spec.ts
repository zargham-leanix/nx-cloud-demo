import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo47Component } from './lib66-demo47.component';

describe('Lib66Demo47Component', () => {
  let component: Lib66Demo47Component;
  let fixture: ComponentFixture<Lib66Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
