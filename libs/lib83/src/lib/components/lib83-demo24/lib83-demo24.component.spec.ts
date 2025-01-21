import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo24Component } from './lib83-demo24.component';

describe('Lib83Demo24Component', () => {
  let component: Lib83Demo24Component;
  let fixture: ComponentFixture<Lib83Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
