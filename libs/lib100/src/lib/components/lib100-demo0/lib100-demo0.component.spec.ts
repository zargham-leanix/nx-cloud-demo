import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo0Component } from './lib100-demo0.component';

describe('Lib100Demo0Component', () => {
  let component: Lib100Demo0Component;
  let fixture: ComponentFixture<Lib100Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
