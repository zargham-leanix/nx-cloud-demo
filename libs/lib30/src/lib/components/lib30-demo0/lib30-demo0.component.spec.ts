import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo0Component } from './lib30-demo0.component';

describe('Lib30Demo0Component', () => {
  let component: Lib30Demo0Component;
  let fixture: ComponentFixture<Lib30Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
