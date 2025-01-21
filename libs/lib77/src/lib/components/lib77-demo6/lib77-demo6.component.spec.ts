import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo6Component } from './lib77-demo6.component';

describe('Lib77Demo6Component', () => {
  let component: Lib77Demo6Component;
  let fixture: ComponentFixture<Lib77Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
