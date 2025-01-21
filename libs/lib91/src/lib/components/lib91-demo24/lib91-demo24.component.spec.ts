import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo24Component } from './lib91-demo24.component';

describe('Lib91Demo24Component', () => {
  let component: Lib91Demo24Component;
  let fixture: ComponentFixture<Lib91Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
