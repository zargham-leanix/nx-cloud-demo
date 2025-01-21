import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo0Component } from './lib81-demo0.component';

describe('Lib81Demo0Component', () => {
  let component: Lib81Demo0Component;
  let fixture: ComponentFixture<Lib81Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
