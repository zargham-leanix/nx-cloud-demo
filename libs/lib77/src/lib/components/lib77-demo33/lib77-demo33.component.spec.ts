import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo33Component } from './lib77-demo33.component';

describe('Lib77Demo33Component', () => {
  let component: Lib77Demo33Component;
  let fixture: ComponentFixture<Lib77Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
