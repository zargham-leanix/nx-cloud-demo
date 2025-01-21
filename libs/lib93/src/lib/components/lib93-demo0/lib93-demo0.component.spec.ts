import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo0Component } from './lib93-demo0.component';

describe('Lib93Demo0Component', () => {
  let component: Lib93Demo0Component;
  let fixture: ComponentFixture<Lib93Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
