import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo0Component } from './lib57-demo0.component';

describe('Lib57Demo0Component', () => {
  let component: Lib57Demo0Component;
  let fixture: ComponentFixture<Lib57Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
