import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo0Component } from './lib23-demo0.component';

describe('Lib23Demo0Component', () => {
  let component: Lib23Demo0Component;
  let fixture: ComponentFixture<Lib23Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
