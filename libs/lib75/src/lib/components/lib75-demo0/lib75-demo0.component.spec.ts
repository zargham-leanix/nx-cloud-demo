import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo0Component } from './lib75-demo0.component';

describe('Lib75Demo0Component', () => {
  let component: Lib75Demo0Component;
  let fixture: ComponentFixture<Lib75Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
