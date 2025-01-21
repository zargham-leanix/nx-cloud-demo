import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo0Component } from './lib59-demo0.component';

describe('Lib59Demo0Component', () => {
  let component: Lib59Demo0Component;
  let fixture: ComponentFixture<Lib59Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
