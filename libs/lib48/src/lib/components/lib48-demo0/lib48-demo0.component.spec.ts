import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo0Component } from './lib48-demo0.component';

describe('Lib48Demo0Component', () => {
  let component: Lib48Demo0Component;
  let fixture: ComponentFixture<Lib48Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
