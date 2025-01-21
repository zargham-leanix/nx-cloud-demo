import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo12Component } from './lib77-demo12.component';

describe('Lib77Demo12Component', () => {
  let component: Lib77Demo12Component;
  let fixture: ComponentFixture<Lib77Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
