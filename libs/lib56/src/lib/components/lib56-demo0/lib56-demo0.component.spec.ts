import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo0Component } from './lib56-demo0.component';

describe('Lib56Demo0Component', () => {
  let component: Lib56Demo0Component;
  let fixture: ComponentFixture<Lib56Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
