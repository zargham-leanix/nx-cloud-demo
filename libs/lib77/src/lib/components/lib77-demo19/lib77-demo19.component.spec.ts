import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo19Component } from './lib77-demo19.component';

describe('Lib77Demo19Component', () => {
  let component: Lib77Demo19Component;
  let fixture: ComponentFixture<Lib77Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
