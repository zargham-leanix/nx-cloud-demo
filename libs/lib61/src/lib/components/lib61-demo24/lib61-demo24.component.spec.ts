import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo24Component } from './lib61-demo24.component';

describe('Lib61Demo24Component', () => {
  let component: Lib61Demo24Component;
  let fixture: ComponentFixture<Lib61Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
