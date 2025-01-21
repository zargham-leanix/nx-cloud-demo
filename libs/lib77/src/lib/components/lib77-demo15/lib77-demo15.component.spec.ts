import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo15Component } from './lib77-demo15.component';

describe('Lib77Demo15Component', () => {
  let component: Lib77Demo15Component;
  let fixture: ComponentFixture<Lib77Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
