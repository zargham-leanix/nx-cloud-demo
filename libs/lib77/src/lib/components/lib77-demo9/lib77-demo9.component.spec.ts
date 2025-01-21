import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo9Component } from './lib77-demo9.component';

describe('Lib77Demo9Component', () => {
  let component: Lib77Demo9Component;
  let fixture: ComponentFixture<Lib77Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
