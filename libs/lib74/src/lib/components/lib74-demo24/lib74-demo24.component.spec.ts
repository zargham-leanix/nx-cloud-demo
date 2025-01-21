import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo24Component } from './lib74-demo24.component';

describe('Lib74Demo24Component', () => {
  let component: Lib74Demo24Component;
  let fixture: ComponentFixture<Lib74Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
