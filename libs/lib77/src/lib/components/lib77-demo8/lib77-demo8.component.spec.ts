import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo8Component } from './lib77-demo8.component';

describe('Lib77Demo8Component', () => {
  let component: Lib77Demo8Component;
  let fixture: ComponentFixture<Lib77Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
