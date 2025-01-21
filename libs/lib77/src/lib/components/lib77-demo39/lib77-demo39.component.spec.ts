import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo39Component } from './lib77-demo39.component';

describe('Lib77Demo39Component', () => {
  let component: Lib77Demo39Component;
  let fixture: ComponentFixture<Lib77Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
