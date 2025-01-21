import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo34Component } from './lib77-demo34.component';

describe('Lib77Demo34Component', () => {
  let component: Lib77Demo34Component;
  let fixture: ComponentFixture<Lib77Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
