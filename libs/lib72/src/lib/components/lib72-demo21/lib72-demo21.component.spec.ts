import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo21Component } from './lib72-demo21.component';

describe('Lib72Demo21Component', () => {
  let component: Lib72Demo21Component;
  let fixture: ComponentFixture<Lib72Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
