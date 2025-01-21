import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo24Component } from './lib31-demo24.component';

describe('Lib31Demo24Component', () => {
  let component: Lib31Demo24Component;
  let fixture: ComponentFixture<Lib31Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
