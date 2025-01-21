import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo24Component } from './lib53-demo24.component';

describe('Lib53Demo24Component', () => {
  let component: Lib53Demo24Component;
  let fixture: ComponentFixture<Lib53Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
