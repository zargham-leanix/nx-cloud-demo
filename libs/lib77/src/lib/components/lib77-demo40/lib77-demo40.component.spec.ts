import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo40Component } from './lib77-demo40.component';

describe('Lib77Demo40Component', () => {
  let component: Lib77Demo40Component;
  let fixture: ComponentFixture<Lib77Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
