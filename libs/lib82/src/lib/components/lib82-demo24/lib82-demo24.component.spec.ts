import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo24Component } from './lib82-demo24.component';

describe('Lib82Demo24Component', () => {
  let component: Lib82Demo24Component;
  let fixture: ComponentFixture<Lib82Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
