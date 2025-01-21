import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo34Component } from './lib66-demo34.component';

describe('Lib66Demo34Component', () => {
  let component: Lib66Demo34Component;
  let fixture: ComponentFixture<Lib66Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
