import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo0Component } from './lib85-demo0.component';

describe('Lib85Demo0Component', () => {
  let component: Lib85Demo0Component;
  let fixture: ComponentFixture<Lib85Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
