import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo29Component } from './lib77-demo29.component';

describe('Lib77Demo29Component', () => {
  let component: Lib77Demo29Component;
  let fixture: ComponentFixture<Lib77Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
