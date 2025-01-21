import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo37Component } from './lib77-demo37.component';

describe('Lib77Demo37Component', () => {
  let component: Lib77Demo37Component;
  let fixture: ComponentFixture<Lib77Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
