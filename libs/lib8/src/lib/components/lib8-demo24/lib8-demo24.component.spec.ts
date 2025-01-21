import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo24Component } from './lib8-demo24.component';

describe('Lib8Demo24Component', () => {
  let component: Lib8Demo24Component;
  let fixture: ComponentFixture<Lib8Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
