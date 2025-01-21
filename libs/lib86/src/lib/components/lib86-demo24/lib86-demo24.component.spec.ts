import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo24Component } from './lib86-demo24.component';

describe('Lib86Demo24Component', () => {
  let component: Lib86Demo24Component;
  let fixture: ComponentFixture<Lib86Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
