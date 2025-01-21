import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo0Component } from './lib14-demo0.component';

describe('Lib14Demo0Component', () => {
  let component: Lib14Demo0Component;
  let fixture: ComponentFixture<Lib14Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
