import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo0Component } from './lib26-demo0.component';

describe('Lib26Demo0Component', () => {
  let component: Lib26Demo0Component;
  let fixture: ComponentFixture<Lib26Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
