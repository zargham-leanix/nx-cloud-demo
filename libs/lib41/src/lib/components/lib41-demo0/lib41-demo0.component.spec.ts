import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo0Component } from './lib41-demo0.component';

describe('Lib41Demo0Component', () => {
  let component: Lib41Demo0Component;
  let fixture: ComponentFixture<Lib41Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
