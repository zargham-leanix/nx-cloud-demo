import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo14Component } from './lib77-demo14.component';

describe('Lib77Demo14Component', () => {
  let component: Lib77Demo14Component;
  let fixture: ComponentFixture<Lib77Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
