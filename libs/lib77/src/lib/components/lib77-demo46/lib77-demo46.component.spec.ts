import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo46Component } from './lib77-demo46.component';

describe('Lib77Demo46Component', () => {
  let component: Lib77Demo46Component;
  let fixture: ComponentFixture<Lib77Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
