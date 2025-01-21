import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo0Component } from './lib91-demo0.component';

describe('Lib91Demo0Component', () => {
  let component: Lib91Demo0Component;
  let fixture: ComponentFixture<Lib91Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
