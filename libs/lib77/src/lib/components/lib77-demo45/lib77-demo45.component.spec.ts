import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo45Component } from './lib77-demo45.component';

describe('Lib77Demo45Component', () => {
  let component: Lib77Demo45Component;
  let fixture: ComponentFixture<Lib77Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
