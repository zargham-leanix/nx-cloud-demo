import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo24Component } from './lib29-demo24.component';

describe('Lib29Demo24Component', () => {
  let component: Lib29Demo24Component;
  let fixture: ComponentFixture<Lib29Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
