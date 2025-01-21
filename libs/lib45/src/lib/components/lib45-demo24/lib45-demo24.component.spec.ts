import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo24Component } from './lib45-demo24.component';

describe('Lib45Demo24Component', () => {
  let component: Lib45Demo24Component;
  let fixture: ComponentFixture<Lib45Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
