import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo22Component } from './lib77-demo22.component';

describe('Lib77Demo22Component', () => {
  let component: Lib77Demo22Component;
  let fixture: ComponentFixture<Lib77Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
