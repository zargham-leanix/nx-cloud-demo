import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo42Component } from './lib77-demo42.component';

describe('Lib77Demo42Component', () => {
  let component: Lib77Demo42Component;
  let fixture: ComponentFixture<Lib77Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
