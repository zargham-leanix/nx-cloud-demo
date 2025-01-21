import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo0Component } from './lib25-demo0.component';

describe('Lib25Demo0Component', () => {
  let component: Lib25Demo0Component;
  let fixture: ComponentFixture<Lib25Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
