import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo24Component } from './lib15-demo24.component';

describe('Lib15Demo24Component', () => {
  let component: Lib15Demo24Component;
  let fixture: ComponentFixture<Lib15Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
