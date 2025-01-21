import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo0Component } from './lib63-demo0.component';

describe('Lib63Demo0Component', () => {
  let component: Lib63Demo0Component;
  let fixture: ComponentFixture<Lib63Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
