import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo9Component } from './lib66-demo9.component';

describe('Lib66Demo9Component', () => {
  let component: Lib66Demo9Component;
  let fixture: ComponentFixture<Lib66Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
