import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo0Component } from './lib54-demo0.component';

describe('Lib54Demo0Component', () => {
  let component: Lib54Demo0Component;
  let fixture: ComponentFixture<Lib54Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
