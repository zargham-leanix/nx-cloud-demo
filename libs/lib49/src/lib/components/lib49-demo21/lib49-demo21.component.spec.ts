import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo21Component } from './lib49-demo21.component';

describe('Lib49Demo21Component', () => {
  let component: Lib49Demo21Component;
  let fixture: ComponentFixture<Lib49Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
