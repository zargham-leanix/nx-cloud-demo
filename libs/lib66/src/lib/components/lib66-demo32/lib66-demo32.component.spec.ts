import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo32Component } from './lib66-demo32.component';

describe('Lib66Demo32Component', () => {
  let component: Lib66Demo32Component;
  let fixture: ComponentFixture<Lib66Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
