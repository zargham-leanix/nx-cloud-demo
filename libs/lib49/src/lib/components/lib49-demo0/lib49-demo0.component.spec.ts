import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo0Component } from './lib49-demo0.component';

describe('Lib49Demo0Component', () => {
  let component: Lib49Demo0Component;
  let fixture: ComponentFixture<Lib49Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
