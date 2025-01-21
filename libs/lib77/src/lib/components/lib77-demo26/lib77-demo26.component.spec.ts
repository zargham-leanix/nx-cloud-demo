import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo26Component } from './lib77-demo26.component';

describe('Lib77Demo26Component', () => {
  let component: Lib77Demo26Component;
  let fixture: ComponentFixture<Lib77Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
