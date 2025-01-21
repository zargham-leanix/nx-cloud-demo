import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo0Component } from './lib28-demo0.component';

describe('Lib28Demo0Component', () => {
  let component: Lib28Demo0Component;
  let fixture: ComponentFixture<Lib28Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
