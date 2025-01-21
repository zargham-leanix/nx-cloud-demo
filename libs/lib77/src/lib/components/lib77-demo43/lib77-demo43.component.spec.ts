import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo43Component } from './lib77-demo43.component';

describe('Lib77Demo43Component', () => {
  let component: Lib77Demo43Component;
  let fixture: ComponentFixture<Lib77Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
