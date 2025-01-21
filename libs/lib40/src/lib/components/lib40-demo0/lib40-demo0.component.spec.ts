import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo0Component } from './lib40-demo0.component';

describe('Lib40Demo0Component', () => {
  let component: Lib40Demo0Component;
  let fixture: ComponentFixture<Lib40Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
