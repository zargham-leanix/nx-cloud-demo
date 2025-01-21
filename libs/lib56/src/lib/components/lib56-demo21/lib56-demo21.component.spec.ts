import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo21Component } from './lib56-demo21.component';

describe('Lib56Demo21Component', () => {
  let component: Lib56Demo21Component;
  let fixture: ComponentFixture<Lib56Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
