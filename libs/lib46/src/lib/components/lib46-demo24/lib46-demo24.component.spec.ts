import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo24Component } from './lib46-demo24.component';

describe('Lib46Demo24Component', () => {
  let component: Lib46Demo24Component;
  let fixture: ComponentFixture<Lib46Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
