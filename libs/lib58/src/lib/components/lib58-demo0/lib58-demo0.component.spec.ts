import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo0Component } from './lib58-demo0.component';

describe('Lib58Demo0Component', () => {
  let component: Lib58Demo0Component;
  let fixture: ComponentFixture<Lib58Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
