import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo0Component } from './lib62-demo0.component';

describe('Lib62Demo0Component', () => {
  let component: Lib62Demo0Component;
  let fixture: ComponentFixture<Lib62Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
