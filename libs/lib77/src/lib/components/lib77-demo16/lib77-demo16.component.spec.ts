import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo16Component } from './lib77-demo16.component';

describe('Lib77Demo16Component', () => {
  let component: Lib77Demo16Component;
  let fixture: ComponentFixture<Lib77Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
