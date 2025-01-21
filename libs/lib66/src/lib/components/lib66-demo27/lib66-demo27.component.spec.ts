import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo27Component } from './lib66-demo27.component';

describe('Lib66Demo27Component', () => {
  let component: Lib66Demo27Component;
  let fixture: ComponentFixture<Lib66Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
