import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo0Component } from './lib46-demo0.component';

describe('Lib46Demo0Component', () => {
  let component: Lib46Demo0Component;
  let fixture: ComponentFixture<Lib46Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
