import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo24Component } from './lib78-demo24.component';

describe('Lib78Demo24Component', () => {
  let component: Lib78Demo24Component;
  let fixture: ComponentFixture<Lib78Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
