import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo47Component } from './lib77-demo47.component';

describe('Lib77Demo47Component', () => {
  let component: Lib77Demo47Component;
  let fixture: ComponentFixture<Lib77Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
