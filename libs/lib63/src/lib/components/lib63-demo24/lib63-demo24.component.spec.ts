import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo24Component } from './lib63-demo24.component';

describe('Lib63Demo24Component', () => {
  let component: Lib63Demo24Component;
  let fixture: ComponentFixture<Lib63Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
