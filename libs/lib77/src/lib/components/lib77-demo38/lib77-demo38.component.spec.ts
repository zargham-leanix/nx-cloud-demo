import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo38Component } from './lib77-demo38.component';

describe('Lib77Demo38Component', () => {
  let component: Lib77Demo38Component;
  let fixture: ComponentFixture<Lib77Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
