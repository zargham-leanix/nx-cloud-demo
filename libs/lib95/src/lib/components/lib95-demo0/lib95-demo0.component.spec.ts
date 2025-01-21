import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo0Component } from './lib95-demo0.component';

describe('Lib95Demo0Component', () => {
  let component: Lib95Demo0Component;
  let fixture: ComponentFixture<Lib95Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
