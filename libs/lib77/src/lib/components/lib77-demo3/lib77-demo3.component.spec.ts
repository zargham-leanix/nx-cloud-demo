import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo3Component } from './lib77-demo3.component';

describe('Lib77Demo3Component', () => {
  let component: Lib77Demo3Component;
  let fixture: ComponentFixture<Lib77Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
