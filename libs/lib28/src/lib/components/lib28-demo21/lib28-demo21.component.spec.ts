import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo21Component } from './lib28-demo21.component';

describe('Lib28Demo21Component', () => {
  let component: Lib28Demo21Component;
  let fixture: ComponentFixture<Lib28Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
