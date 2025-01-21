import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo41Component } from './lib77-demo41.component';

describe('Lib77Demo41Component', () => {
  let component: Lib77Demo41Component;
  let fixture: ComponentFixture<Lib77Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
