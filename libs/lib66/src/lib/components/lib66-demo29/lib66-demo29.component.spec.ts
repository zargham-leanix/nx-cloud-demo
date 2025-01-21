import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo29Component } from './lib66-demo29.component';

describe('Lib66Demo29Component', () => {
  let component: Lib66Demo29Component;
  let fixture: ComponentFixture<Lib66Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
