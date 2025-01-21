import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo2Component } from './lib77-demo2.component';

describe('Lib77Demo2Component', () => {
  let component: Lib77Demo2Component;
  let fixture: ComponentFixture<Lib77Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
