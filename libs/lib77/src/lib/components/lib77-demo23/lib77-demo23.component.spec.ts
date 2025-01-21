import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo23Component } from './lib77-demo23.component';

describe('Lib77Demo23Component', () => {
  let component: Lib77Demo23Component;
  let fixture: ComponentFixture<Lib77Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
