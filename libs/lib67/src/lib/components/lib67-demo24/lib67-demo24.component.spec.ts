import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo24Component } from './lib67-demo24.component';

describe('Lib67Demo24Component', () => {
  let component: Lib67Demo24Component;
  let fixture: ComponentFixture<Lib67Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
