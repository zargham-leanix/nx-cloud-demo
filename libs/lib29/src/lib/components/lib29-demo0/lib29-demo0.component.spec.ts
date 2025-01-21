import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo0Component } from './lib29-demo0.component';

describe('Lib29Demo0Component', () => {
  let component: Lib29Demo0Component;
  let fixture: ComponentFixture<Lib29Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
