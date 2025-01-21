import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo21Component } from './lib71-demo21.component';

describe('Lib71Demo21Component', () => {
  let component: Lib71Demo21Component;
  let fixture: ComponentFixture<Lib71Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
