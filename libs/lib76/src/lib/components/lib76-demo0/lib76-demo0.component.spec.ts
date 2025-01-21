import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo0Component } from './lib76-demo0.component';

describe('Lib76Demo0Component', () => {
  let component: Lib76Demo0Component;
  let fixture: ComponentFixture<Lib76Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
