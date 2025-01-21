import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib77Demo31Component } from './lib77-demo31.component';

describe('Lib77Demo31Component', () => {
  let component: Lib77Demo31Component;
  let fixture: ComponentFixture<Lib77Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib77Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib77Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
