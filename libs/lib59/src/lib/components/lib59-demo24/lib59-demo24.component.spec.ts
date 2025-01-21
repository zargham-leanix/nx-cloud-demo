import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo24Component } from './lib59-demo24.component';

describe('Lib59Demo24Component', () => {
  let component: Lib59Demo24Component;
  let fixture: ComponentFixture<Lib59Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
