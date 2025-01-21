import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo0Component } from './lib24-demo0.component';

describe('Lib24Demo0Component', () => {
  let component: Lib24Demo0Component;
  let fixture: ComponentFixture<Lib24Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
