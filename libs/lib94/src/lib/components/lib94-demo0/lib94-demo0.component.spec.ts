import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo0Component } from './lib94-demo0.component';

describe('Lib94Demo0Component', () => {
  let component: Lib94Demo0Component;
  let fixture: ComponentFixture<Lib94Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
