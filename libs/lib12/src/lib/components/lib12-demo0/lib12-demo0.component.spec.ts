import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo0Component } from './lib12-demo0.component';

describe('Lib12Demo0Component', () => {
  let component: Lib12Demo0Component;
  let fixture: ComponentFixture<Lib12Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
