import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo27Component } from './lib77-demo27.component';

describe('Lib77Demo27Component', () => {
  let component: Lib77Demo27Component;
  let fixture: ComponentFixture<Lib77Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
