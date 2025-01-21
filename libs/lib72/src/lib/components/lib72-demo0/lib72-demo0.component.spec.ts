import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo0Component } from './lib72-demo0.component';

describe('Lib72Demo0Component', () => {
  let component: Lib72Demo0Component;
  let fixture: ComponentFixture<Lib72Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
