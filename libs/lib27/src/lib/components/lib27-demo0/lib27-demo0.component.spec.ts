import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo0Component } from './lib27-demo0.component';

describe('Lib27Demo0Component', () => {
  let component: Lib27Demo0Component;
  let fixture: ComponentFixture<Lib27Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
