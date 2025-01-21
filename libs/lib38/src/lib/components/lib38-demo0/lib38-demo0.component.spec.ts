import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo0Component } from './lib38-demo0.component';

describe('Lib38Demo0Component', () => {
  let component: Lib38Demo0Component;
  let fixture: ComponentFixture<Lib38Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
