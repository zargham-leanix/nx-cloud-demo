import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo21Component } from './lib40-demo21.component';

describe('Lib40Demo21Component', () => {
  let component: Lib40Demo21Component;
  let fixture: ComponentFixture<Lib40Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
