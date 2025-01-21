import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo21Component } from './lib77-demo21.component';

describe('Lib77Demo21Component', () => {
  let component: Lib77Demo21Component;
  let fixture: ComponentFixture<Lib77Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
