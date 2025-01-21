import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo0Component } from './lib8-demo0.component';

describe('Lib8Demo0Component', () => {
  let component: Lib8Demo0Component;
  let fixture: ComponentFixture<Lib8Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
