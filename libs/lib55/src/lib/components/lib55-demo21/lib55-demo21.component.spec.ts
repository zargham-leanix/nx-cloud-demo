import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo21Component } from './lib55-demo21.component';

describe('Lib55Demo21Component', () => {
  let component: Lib55Demo21Component;
  let fixture: ComponentFixture<Lib55Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
