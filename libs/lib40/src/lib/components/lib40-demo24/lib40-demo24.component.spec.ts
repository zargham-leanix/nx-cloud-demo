import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo24Component } from './lib40-demo24.component';

describe('Lib40Demo24Component', () => {
  let component: Lib40Demo24Component;
  let fixture: ComponentFixture<Lib40Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
