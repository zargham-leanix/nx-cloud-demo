import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo0Component } from './lib88-demo0.component';

describe('Lib88Demo0Component', () => {
  let component: Lib88Demo0Component;
  let fixture: ComponentFixture<Lib88Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
