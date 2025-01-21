import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo21Component } from './lib76-demo21.component';

describe('Lib76Demo21Component', () => {
  let component: Lib76Demo21Component;
  let fixture: ComponentFixture<Lib76Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
