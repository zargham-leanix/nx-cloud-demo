import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo24Component } from './lib80-demo24.component';

describe('Lib80Demo24Component', () => {
  let component: Lib80Demo24Component;
  let fixture: ComponentFixture<Lib80Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
