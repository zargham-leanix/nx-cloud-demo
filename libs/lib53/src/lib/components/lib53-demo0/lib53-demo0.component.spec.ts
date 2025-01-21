import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo0Component } from './lib53-demo0.component';

describe('Lib53Demo0Component', () => {
  let component: Lib53Demo0Component;
  let fixture: ComponentFixture<Lib53Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
