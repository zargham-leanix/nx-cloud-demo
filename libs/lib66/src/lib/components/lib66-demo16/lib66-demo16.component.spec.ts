import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo16Component } from './lib66-demo16.component';

describe('Lib66Demo16Component', () => {
  let component: Lib66Demo16Component;
  let fixture: ComponentFixture<Lib66Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
