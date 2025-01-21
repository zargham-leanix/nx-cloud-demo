import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo0Component } from './lib44-demo0.component';

describe('Lib44Demo0Component', () => {
  let component: Lib44Demo0Component;
  let fixture: ComponentFixture<Lib44Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
