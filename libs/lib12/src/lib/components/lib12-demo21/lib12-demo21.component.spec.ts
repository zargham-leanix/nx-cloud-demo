import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo21Component } from './lib12-demo21.component';

describe('Lib12Demo21Component', () => {
  let component: Lib12Demo21Component;
  let fixture: ComponentFixture<Lib12Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
