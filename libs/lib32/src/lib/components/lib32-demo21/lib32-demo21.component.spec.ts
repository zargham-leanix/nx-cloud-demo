import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo21Component } from './lib32-demo21.component';

describe('Lib32Demo21Component', () => {
  let component: Lib32Demo21Component;
  let fixture: ComponentFixture<Lib32Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
