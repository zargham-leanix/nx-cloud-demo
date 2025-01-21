import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo0Component } from './lib42-demo0.component';

describe('Lib42Demo0Component', () => {
  let component: Lib42Demo0Component;
  let fixture: ComponentFixture<Lib42Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
