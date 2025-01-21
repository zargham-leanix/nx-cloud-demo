import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo5Component } from './lib77-demo5.component';

describe('Lib77Demo5Component', () => {
  let component: Lib77Demo5Component;
  let fixture: ComponentFixture<Lib77Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
