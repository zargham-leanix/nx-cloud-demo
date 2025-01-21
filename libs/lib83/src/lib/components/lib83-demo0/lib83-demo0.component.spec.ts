import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo0Component } from './lib83-demo0.component';

describe('Lib83Demo0Component', () => {
  let component: Lib83Demo0Component;
  let fixture: ComponentFixture<Lib83Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
