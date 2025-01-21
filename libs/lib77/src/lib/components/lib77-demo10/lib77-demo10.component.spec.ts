import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo10Component } from './lib77-demo10.component';

describe('Lib77Demo10Component', () => {
  let component: Lib77Demo10Component;
  let fixture: ComponentFixture<Lib77Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
