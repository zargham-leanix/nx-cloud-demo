import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo24Component } from './lib26-demo24.component';

describe('Lib26Demo24Component', () => {
  let component: Lib26Demo24Component;
  let fixture: ComponentFixture<Lib26Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
