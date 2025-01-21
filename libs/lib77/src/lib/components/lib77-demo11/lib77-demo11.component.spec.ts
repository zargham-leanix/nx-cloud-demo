import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo11Component } from './lib77-demo11.component';

describe('Lib77Demo11Component', () => {
  let component: Lib77Demo11Component;
  let fixture: ComponentFixture<Lib77Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
