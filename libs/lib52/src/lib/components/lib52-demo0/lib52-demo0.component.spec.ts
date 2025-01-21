import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo0Component } from './lib52-demo0.component';

describe('Lib52Demo0Component', () => {
  let component: Lib52Demo0Component;
  let fixture: ComponentFixture<Lib52Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
