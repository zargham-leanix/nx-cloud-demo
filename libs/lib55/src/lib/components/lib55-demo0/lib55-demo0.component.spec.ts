import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo0Component } from './lib55-demo0.component';

describe('Lib55Demo0Component', () => {
  let component: Lib55Demo0Component;
  let fixture: ComponentFixture<Lib55Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
