import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo4Component } from './lib77-demo4.component';

describe('Lib77Demo4Component', () => {
  let component: Lib77Demo4Component;
  let fixture: ComponentFixture<Lib77Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
