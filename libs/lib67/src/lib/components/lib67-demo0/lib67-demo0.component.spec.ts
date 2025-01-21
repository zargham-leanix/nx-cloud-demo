import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo0Component } from './lib67-demo0.component';

describe('Lib67Demo0Component', () => {
  let component: Lib67Demo0Component;
  let fixture: ComponentFixture<Lib67Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
