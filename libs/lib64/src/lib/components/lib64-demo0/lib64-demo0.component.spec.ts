import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo0Component } from './lib64-demo0.component';

describe('Lib64Demo0Component', () => {
  let component: Lib64Demo0Component;
  let fixture: ComponentFixture<Lib64Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
