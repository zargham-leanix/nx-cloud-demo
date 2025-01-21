import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo35Component } from './lib77-demo35.component';

describe('Lib77Demo35Component', () => {
  let component: Lib77Demo35Component;
  let fixture: ComponentFixture<Lib77Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
