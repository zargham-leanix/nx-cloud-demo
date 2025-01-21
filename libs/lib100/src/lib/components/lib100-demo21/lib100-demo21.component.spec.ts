import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo21Component } from './lib100-demo21.component';

describe('Lib100Demo21Component', () => {
  let component: Lib100Demo21Component;
  let fixture: ComponentFixture<Lib100Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
