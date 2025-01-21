import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo24Component } from './lib48-demo24.component';

describe('Lib48Demo24Component', () => {
  let component: Lib48Demo24Component;
  let fixture: ComponentFixture<Lib48Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
