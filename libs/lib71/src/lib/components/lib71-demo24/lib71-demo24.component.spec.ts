import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo24Component } from './lib71-demo24.component';

describe('Lib71Demo24Component', () => {
  let component: Lib71Demo24Component;
  let fixture: ComponentFixture<Lib71Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
