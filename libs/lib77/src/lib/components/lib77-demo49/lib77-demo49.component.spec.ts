import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo49Component } from './lib77-demo49.component';

describe('Lib77Demo49Component', () => {
  let component: Lib77Demo49Component;
  let fixture: ComponentFixture<Lib77Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
