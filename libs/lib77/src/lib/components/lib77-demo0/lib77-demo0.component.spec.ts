import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo0Component } from './lib77-demo0.component';

describe('Lib77Demo0Component', () => {
  let component: Lib77Demo0Component;
  let fixture: ComponentFixture<Lib77Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
