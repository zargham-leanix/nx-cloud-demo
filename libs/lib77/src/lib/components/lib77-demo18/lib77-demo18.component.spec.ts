import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo18Component } from './lib77-demo18.component';

describe('Lib77Demo18Component', () => {
  let component: Lib77Demo18Component;
  let fixture: ComponentFixture<Lib77Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
