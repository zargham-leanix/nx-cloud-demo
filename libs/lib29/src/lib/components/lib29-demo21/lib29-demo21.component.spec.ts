import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo21Component } from './lib29-demo21.component';

describe('Lib29Demo21Component', () => {
  let component: Lib29Demo21Component;
  let fixture: ComponentFixture<Lib29Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
