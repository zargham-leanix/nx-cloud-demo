import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo25Component } from './lib77-demo25.component';

describe('Lib77Demo25Component', () => {
  let component: Lib77Demo25Component;
  let fixture: ComponentFixture<Lib77Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
