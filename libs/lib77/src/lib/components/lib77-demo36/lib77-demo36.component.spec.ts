import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo36Component } from './lib77-demo36.component';

describe('Lib77Demo36Component', () => {
  let component: Lib77Demo36Component;
  let fixture: ComponentFixture<Lib77Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
