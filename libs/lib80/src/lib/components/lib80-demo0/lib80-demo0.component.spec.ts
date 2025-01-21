import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo0Component } from './lib80-demo0.component';

describe('Lib80Demo0Component', () => {
  let component: Lib80Demo0Component;
  let fixture: ComponentFixture<Lib80Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
