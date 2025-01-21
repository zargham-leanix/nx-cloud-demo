import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo0Component } from './lib4-demo0.component';

describe('Lib4Demo0Component', () => {
  let component: Lib4Demo0Component;
  let fixture: ComponentFixture<Lib4Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
