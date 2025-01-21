import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo32Component } from './lib77-demo32.component';

describe('Lib77Demo32Component', () => {
  let component: Lib77Demo32Component;
  let fixture: ComponentFixture<Lib77Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
