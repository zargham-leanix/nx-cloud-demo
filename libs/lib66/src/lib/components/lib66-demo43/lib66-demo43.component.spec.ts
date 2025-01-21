import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo43Component } from './lib66-demo43.component';

describe('Lib66Demo43Component', () => {
  let component: Lib66Demo43Component;
  let fixture: ComponentFixture<Lib66Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
