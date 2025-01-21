import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo0Component } from './lib86-demo0.component';

describe('Lib86Demo0Component', () => {
  let component: Lib86Demo0Component;
  let fixture: ComponentFixture<Lib86Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
