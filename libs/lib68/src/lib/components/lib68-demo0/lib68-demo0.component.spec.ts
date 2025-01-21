import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo0Component } from './lib68-demo0.component';

describe('Lib68Demo0Component', () => {
  let component: Lib68Demo0Component;
  let fixture: ComponentFixture<Lib68Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
