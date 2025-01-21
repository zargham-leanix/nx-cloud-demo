import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo0Component } from './lib47-demo0.component';

describe('Lib47Demo0Component', () => {
  let component: Lib47Demo0Component;
  let fixture: ComponentFixture<Lib47Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
