import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo0Component } from './lib33-demo0.component';

describe('Lib33Demo0Component', () => {
  let component: Lib33Demo0Component;
  let fixture: ComponentFixture<Lib33Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
