import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo1Component } from './lib77-demo1.component';

describe('Lib77Demo1Component', () => {
  let component: Lib77Demo1Component;
  let fixture: ComponentFixture<Lib77Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
