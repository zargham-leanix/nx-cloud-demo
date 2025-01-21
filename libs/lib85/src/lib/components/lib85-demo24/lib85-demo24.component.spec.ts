import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo24Component } from './lib85-demo24.component';

describe('Lib85Demo24Component', () => {
  let component: Lib85Demo24Component;
  let fixture: ComponentFixture<Lib85Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
