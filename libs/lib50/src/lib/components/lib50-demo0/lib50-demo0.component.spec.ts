import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo0Component } from './lib50-demo0.component';

describe('Lib50Demo0Component', () => {
  let component: Lib50Demo0Component;
  let fixture: ComponentFixture<Lib50Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
