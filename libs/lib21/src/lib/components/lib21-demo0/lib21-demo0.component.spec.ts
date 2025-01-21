import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo0Component } from './lib21-demo0.component';

describe('Lib21Demo0Component', () => {
  let component: Lib21Demo0Component;
  let fixture: ComponentFixture<Lib21Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
