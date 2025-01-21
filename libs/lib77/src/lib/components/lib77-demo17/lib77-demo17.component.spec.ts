import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo17Component } from './lib77-demo17.component';

describe('Lib77Demo17Component', () => {
  let component: Lib77Demo17Component;
  let fixture: ComponentFixture<Lib77Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
