import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo0Component } from './lib84-demo0.component';

describe('Lib84Demo0Component', () => {
  let component: Lib84Demo0Component;
  let fixture: ComponentFixture<Lib84Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
