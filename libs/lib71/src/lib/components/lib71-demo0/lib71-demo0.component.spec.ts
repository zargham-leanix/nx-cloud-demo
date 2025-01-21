import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo0Component } from './lib71-demo0.component';

describe('Lib71Demo0Component', () => {
  let component: Lib71Demo0Component;
  let fixture: ComponentFixture<Lib71Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
