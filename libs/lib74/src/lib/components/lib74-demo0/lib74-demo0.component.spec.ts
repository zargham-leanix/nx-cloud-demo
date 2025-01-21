import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo0Component } from './lib74-demo0.component';

describe('Lib74Demo0Component', () => {
  let component: Lib74Demo0Component;
  let fixture: ComponentFixture<Lib74Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
