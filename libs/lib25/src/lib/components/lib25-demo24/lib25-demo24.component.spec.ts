import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo24Component } from './lib25-demo24.component';

describe('Lib25Demo24Component', () => {
  let component: Lib25Demo24Component;
  let fixture: ComponentFixture<Lib25Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
