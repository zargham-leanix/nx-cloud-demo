import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo33Component } from './lib66-demo33.component';

describe('Lib66Demo33Component', () => {
  let component: Lib66Demo33Component;
  let fixture: ComponentFixture<Lib66Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
