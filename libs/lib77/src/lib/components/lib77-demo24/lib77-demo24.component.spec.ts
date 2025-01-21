import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo24Component } from './lib77-demo24.component';

describe('Lib77Demo24Component', () => {
  let component: Lib77Demo24Component;
  let fixture: ComponentFixture<Lib77Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
