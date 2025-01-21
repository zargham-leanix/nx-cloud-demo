import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo24Component } from './lib21-demo24.component';

describe('Lib21Demo24Component', () => {
  let component: Lib21Demo24Component;
  let fixture: ComponentFixture<Lib21Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
