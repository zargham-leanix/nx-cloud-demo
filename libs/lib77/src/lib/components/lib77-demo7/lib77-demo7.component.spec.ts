import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo7Component } from './lib77-demo7.component';

describe('Lib77Demo7Component', () => {
  let component: Lib77Demo7Component;
  let fixture: ComponentFixture<Lib77Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
