import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo44Component } from './lib77-demo44.component';

describe('Lib77Demo44Component', () => {
  let component: Lib77Demo44Component;
  let fixture: ComponentFixture<Lib77Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
