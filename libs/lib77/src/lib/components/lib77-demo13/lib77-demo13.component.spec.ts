import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo13Component } from './lib77-demo13.component';

describe('Lib77Demo13Component', () => {
  let component: Lib77Demo13Component;
  let fixture: ComponentFixture<Lib77Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
