import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo2Component } from './lib66-demo2.component';

describe('Lib66Demo2Component', () => {
  let component: Lib66Demo2Component;
  let fixture: ComponentFixture<Lib66Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
