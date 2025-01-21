import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo11Component } from './lib66-demo11.component';

describe('Lib66Demo11Component', () => {
  let component: Lib66Demo11Component;
  let fixture: ComponentFixture<Lib66Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
